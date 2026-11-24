import fs from 'node:fs';
import path from 'node:path';

console.log('Running data validation check on published datasets...');

const brandsPath = path.resolve('src/data/published-brands.json');
if (!fs.existsSync(brandsPath)) {
  console.error('FAIL: src/data/published-brands.json not found!');
  process.exit(1);
}

const brands = JSON.parse(fs.readFileSync(brandsPath, 'utf-8'));

if (!Array.isArray(brands) || brands.length !== 31) {
  console.error(`FAIL: Expected 31 unique brands, found ${brands.length}`);
  process.exit(1);
}

const slugs = new Set();
const ids = new Set();

for (const b of brands) {
  if (slugs.has(b.slug)) {
    console.error(`FAIL: Duplicate slug detected: ${b.slug}`);
    process.exit(1);
  }
  slugs.add(b.slug);

  if (ids.has(b.id)) {
    console.error(`FAIL: Duplicate id detected: ${b.id}`);
    process.exit(1);
  }
  ids.add(b.id);

  if (!b.name || !b.description || !b.primaryAffiliate) {
    console.error(`FAIL: Brand missing required fields: ${b.slug}`);
    process.exit(1);
  }

  // Check no null zero test confusion
  if (b.speedHighlights) {
    for (const s of b.speedHighlights) {
      if (s.latency === '0ms' || s.download === '0Mbps') {
        console.warn(`WARN: Suspicious 0 value in test for ${b.slug}: ${s.region}`);
      }
    }
  }
}

console.log(`PASS: All ${brands.length} brand entities validated successfully. Unique slugs and persistent IDs confirmed.`);
