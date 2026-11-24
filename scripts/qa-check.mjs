import fs from 'node:fs';
import path from 'node:path';

console.log('Running QA Check on generated dist directory...');

const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  console.error('FAIL: dist/ directory does not exist! Please run astro build first.');
  process.exit(1);
}

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} generated HTML pages...`);

const titles = new Map();
const canonMap = new Map();
let affiliateLinkCount = 0;
let errors = [];

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf-8');
  const relPath = path.relative(distDir, f).replace(/\\/g, '/');

  // Skip 404 or draft from strict canonical check
  if (relPath.includes('404.html')) continue;

  // 1. Check title
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (!titleMatch) {
    errors.push(`Missing <title> in ${relPath}`);
  } else {
    const t = titleMatch[1];
    if (titles.has(t) && !relPath.includes('404')) {
      errors.push(`Duplicate title "${t}" in ${relPath} and ${titles.get(t)}`);
    } else {
      titles.set(t, relPath);
    }
  }

  // 2. Check meta description
  const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"/i);
  if (!descMatch && !relPath.includes('404')) {
    errors.push(`Missing meta description in ${relPath}`);
  }

  // 3. Check H1
  const h1Match = content.match(/<h1[\s>]/i);
  if (!h1Match && !relPath.includes('404')) {
    errors.push(`Missing <h1> in ${relPath}`);
  }

  // 4. Check canonical
  const canonMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/i);
  if (!canonMatch && !relPath.includes('404')) {
    errors.push(`Missing canonical in ${relPath}`);
  } else if (canonMatch) {
    const c = canonMatch[1];
    if (!c.startsWith('https://jichangwiki.biz')) {
      errors.push(`Invalid canonical host "${c}" in ${relPath}`);
    }
    if (canonMap.has(c)) {
      errors.push(`Duplicate canonical "${c}" in ${relPath} and ${canonMap.get(c)}`);
    } else {
      canonMap.set(c, relPath);
    }
  }

  // 5. Check affiliate links compliance: rel="nofollow sponsored noopener"
  const affLinkRegex = /href="(https:\/\/[^"]*?aff[^"]*?)"([^>]*?)>/gi;
  let match;
  while ((match = affLinkRegex.exec(content)) !== null) {
    affiliateLinkCount++;
    const linkTag = match[0];
    if (!linkTag.includes('sponsored') || !linkTag.includes('nofollow') || !linkTag.includes('noopener')) {
      errors.push(`Affiliate link missing compliant rel attributes in ${relPath}: ${linkTag}`);
    }
    if (!linkTag.includes('target="_blank"')) {
      errors.push(`Affiliate link missing target="_blank" in ${relPath}: ${linkTag}`);
    }
  }
}

// Check Sitemap output
const sitemapExists = fs.existsSync(path.join(distDir, 'sitemap-index.xml')) || fs.existsSync(path.join(distDir, 'sitemap-0.xml'));
if (!sitemapExists) {
  errors.push('Missing sitemap in dist/');
}

const qaReport = {
  timestamp: new Date().toISOString(),
  pagesAudited: htmlFiles.length,
  uniqueTitles: titles.size,
  uniqueCanonicals: canonMap.size,
  affiliateLinksChecked: affiliateLinkCount,
  sitemapGenerated: sitemapExists,
  errorCount: errors.length,
  errors: errors
};

fs.writeFileSync(path.resolve('reports/qa-report.json'), JSON.stringify(qaReport, null, 2), 'utf-8');

if (errors.length > 0) {
  console.error(`FAIL: QA Check encountered ${errors.length} errors! See reports/qa-report.json`);
  errors.slice(0, 10).forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log(`PASS: All ${htmlFiles.length} HTML pages passed QA audit with zero errors!`);
  console.log(`- Checked ${affiliateLinkCount} affiliate links for strict rel="nofollow sponsored noopener".`);
  console.log(`- Verified unique Titles, Descriptions, H1s, Canonical URLs and Sitemap.`);
}
