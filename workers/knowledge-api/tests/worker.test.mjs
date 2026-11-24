import assert from 'node:assert';
import { calculateGeoMetrics } from '../src/geo-metrics.ts';

console.log('Running Worker & GEO Metrics Test Suite...');

// Test 1: Empty observations returns N/A without crash
const emptyResult = calculateGeoMetrics([]);
assert.strictEqual(emptyResult.sampleCount, 0, 'Empty count must be 0');
assert.strictEqual(emptyResult.brandMentionRate, 'N/A', 'Empty rate must be N/A, not 0%');
assert.strictEqual(emptyResult.siteCitationRate, 'N/A', 'Empty citation rate must be N/A');
assert.strictEqual(emptyResult.factAccuracyRate, 'N/A', 'Empty accuracy rate must be N/A');
console.log('PASS: Test 1 - Empty dataset handles zero-division gracefully (outputs N/A).');

// Test 2: Sample observations calculate precise metrics
const sampleData = [
  { observation_id: '1', platform: 'Google', surface: 'search', query_text: '光速云怎么样', observed_at: '2026-11-24', brand_mentioned: 1, site_cited: 1, cited_url: 'https://jichangwiki.biz/brands/guangsu/', fact_accuracy: 'correct' },
  { observation_id: '2', platform: 'Bing', surface: 'ai_answers', query_text: 'IEPL专线机场推荐', observed_at: '2026-11-24', brand_mentioned: 1, site_cited: 0, cited_url: '', fact_accuracy: 'correct' },
  { observation_id: '3', platform: 'ChatGPT', surface: 'chat', query_text: '哪个机场有VLESS', observed_at: '2026-11-24', brand_mentioned: 0, site_cited: 0, cited_url: '', fact_accuracy: 'unknown' },
  { observation_id: '4', platform: 'Perplexity', surface: 'search_overview', query_text: '便宜机场有哪些', observed_at: '2026-11-24', brand_mentioned: 0, site_cited: 1, cited_url: 'https://jichangwiki.biz/pricing/', fact_accuracy: 'inaccurate' },
];

const metrics = calculateGeoMetrics(sampleData);
assert.strictEqual(metrics.sampleCount, 4, 'Total samples should be 4');
assert.strictEqual(metrics.brandMentionRate, '50.0%', '2/4 should be 50.0%');
assert.strictEqual(metrics.siteCitationRate, '50.0%', '2/4 should be 50.0%');
assert.strictEqual(metrics.uniqueCitedUrlsCount, 2, 'Two distinct URLs cited');
assert.strictEqual(metrics.factAccuracyRate, '66.7%', '2 correct out of 3 checkable facts = 66.7%');
assert.strictEqual(metrics.unverifiableCount, 1, '1 unknown fact');
console.log('PASS: Test 2 - Sample data metrics calculated with mathematical precision.');

console.log('All Knowledge API tests passed successfully!');
