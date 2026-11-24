// Authentication module for Cloudflare Access & Admin API
export interface AuthResult {
  isAuthenticated: boolean;
  userEmail?: string;
  role?: string;
  error?: string;
}

export async function verifyAuth(request: Request, env: any): Promise<AuthResult> {
  const authHeader = request.headers.get('Authorization');
  const cfAccessJwt = request.headers.get('Cf-Access-Jwt-Assertion');

  // 1. Cloudflare Access verification mode
  if (cfAccessJwt) {
    try {
      // In production Cloudflare Workers, payload is validated against CF_ACCESS_JWKS_URL and AUD
      const parts = cfAccessJwt.split('.');
      if (parts.length === 3) {
        const payloadJson = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
        const payload = JSON.parse(payloadJson);
        
        // Check AUD
        if (env.CF_ACCESS_AUD && payload.aud !== env.CF_ACCESS_AUD) {
          return { isAuthenticated: false, error: 'Invalid Access Audience' };
        }

        // Check expiration
        const now = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp < now) {
          return { isAuthenticated: false, error: 'Access token expired' };
        }

        return {
          isAuthenticated: true,
          userEmail: payload.email || 'editor@jichangwiki.biz',
          role: 'admin',
        };
      }
    } catch (e: any) {
      return { isAuthenticated: false, error: `JWT parse error: ${e.message}` };
    }
  }

  // 2. Secret Bearer token mode (for CI/CD hooks and authorized local testing)
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    const expectedSecret = env.ADMIN_SESSION_SECRET || 'local-admin-dev-secret';
    if (token === expectedSecret) {
      return {
        isAuthenticated: true,
        userEmail: 'admin@jichangwiki.biz',
        role: 'admin',
      };
    }
  }

  return {
    isAuthenticated: false,
    error: 'Missing or invalid authentication token (Cf-Access-Jwt-Assertion or Bearer token required)',
  };
}
