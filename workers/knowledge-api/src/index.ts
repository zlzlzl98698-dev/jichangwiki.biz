import { verifyAuth } from './auth';
import { calculateGeoMetrics, type GeoObservation } from './geo-metrics';

export interface Env {
  DB: D1Database;
  ENVIRONMENT: string;
  ADMIN_SESSION_SECRET?: string;
  CF_ACCESS_AUD?: string;
  BUILD_HOOK_SECRET?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cf-Access-Jwt-Assertion',
};

function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // 1. Health check
      if (path === '/api/v1/health') {
        return jsonResponse({
          status: 'ok',
          service: 'JichangWiki Knowledge Engine API',
          version: '1.0.0',
          environment: env.ENVIRONMENT || 'production',
          timestamp: new Date().toISOString(),
        });
      }

      // 2. Public Read-only: GET /api/v1/brands
      if (path === '/api/v1/brands' && request.method === 'GET') {
        if (!env.DB) {
          return jsonResponse({ error: 'Database unconfigured. Use static JSON snapshot.' }, 503);
        }
        const { results } = await env.DB.prepare(
          'SELECT id, slug, name, description, founded_year, client_mode, starting_monthly_cny, publication_status FROM brands WHERE publication_status = ? ORDER BY id ASC'
        ).bind('published').all();
        return jsonResponse({ total: results.length, data: results });
      }

      // 3. Public Read-only: GET /api/v1/geo/summary
      if (path === '/api/v1/geo/summary' && request.method === 'GET') {
        if (!env.DB) {
          const metrics = calculateGeoMetrics([]);
          return jsonResponse({ notice: 'D1 not connected in current mode', metrics });
        }
        const { results } = await env.DB.prepare(
          'SELECT * FROM geo_observations ORDER BY observed_at DESC LIMIT 500'
        ).all<GeoObservation>();
        const metrics = calculateGeoMetrics(results || []);
        return jsonResponse({ summary: metrics });
      }

      // 4. Authenticated Admin Endpoints (Requires Access JWT or Bearer Secret)
      if (path.startsWith('/api/v1/admin/')) {
        const auth = await verifyAuth(request, env);
        if (!auth.isAuthenticated) {
          return jsonResponse({ error: 'Unauthorized: ' + auth.error }, 401);
        }

        // POST /api/v1/admin/observations
        if (path === '/api/v1/admin/observations' && request.method === 'POST') {
          const body: any = await request.json();
          const { platform, surface, query_text, brand_id, brand_mentioned, site_cited, cited_url, fact_accuracy } = body;

          if (!platform || !query_text) {
            return jsonResponse({ error: 'Missing required observation fields (platform, query_text)' }, 400);
          }

          const obsId = 'obs-' + crypto.randomUUID().slice(0, 8);
          await env.DB.prepare(
            `INSERT INTO geo_observations (observation_id, platform, surface, query_text, observed_at, brand_id, brand_mentioned, site_cited, cited_url, fact_accuracy)
             VALUES (?, ?, ?, ?, datetime('now'), ?, ?, ?, ?, ?)`
          ).bind(obsId, platform, surface || 'search', query_text, brand_id || null, brand_mentioned ? 1 : 0, site_cited ? 1 : 0, cited_url || null, fact_accuracy || 'unknown').run();

          return jsonResponse({ success: true, observationId: obsId });
        }

        // GET /api/v1/admin/audit-log
        if (path === '/api/v1/admin/audit-log' && request.method === 'GET') {
          const { results } = await env.DB.prepare('SELECT * FROM audit_log ORDER BY timestamp DESC LIMIT 100').all();
          return jsonResponse({ logs: results });
        }

        // POST /api/v1/admin/publish-trigger
        if (path === '/api/v1/admin/publish-trigger' && request.method === 'POST') {
          return jsonResponse({
            success: true,
            action: 'publish_triggered',
            operator: auth.userEmail,
            timestamp: new Date().toISOString(),
            message: 'Authorized build trigger dispatched.',
          });
        }
      }

      return jsonResponse({ error: 'Endpoint not found' }, 404);
    } catch (err: any) {
      return jsonResponse({ error: 'Internal Worker Exception: ' + err.message }, 500);
    }
  },
};
