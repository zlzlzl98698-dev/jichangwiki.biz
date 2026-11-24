import sharp from 'sharp';
import fs from 'node:fs';

async function processAvatar() {
  const input = 'C:/Users/Pro User/.gemini/antigravity/brain/77cff003-f562-42e3-9546-ac383b643bb1/.user_uploaded/media_1795504128955_82355092.webp';

  // 1. Save original webp as master
  fs.copyFileSync(input, 'public/avatar.webp');

  // 2. Crop 135x140 from top:0, left:0 to perfectly capture face + golden key (HJ)
  const faceBuffer = await sharp(input)
    .extract({ left: 0, top: 0, width: 135, height: 140 })
    .toBuffer();

  // 3. Compose square 256x256 with seamless background padding
  const padded = await sharp(faceBuffer)
    .resize(236, 245, { fit: 'contain', background: { r: 52, g: 81, b: 93, alpha: 1 } })
    .extend({
      top: 5,
      bottom: 6,
      left: 10,
      right: 10,
      background: { r: 52, g: 81, b: 93, alpha: 1 }
    })
    .resize(256, 256)
    .toBuffer();

  const circleSvg = Buffer.from(`<svg width="256" height="256"><circle cx="128" cy="128" r="126" fill="#fff"/></svg>`);

  // 4. Generate high-res circular masked avatar (square canvas, transparent outside)
  const circularMaster = await sharp(padded)
    .composite([{ input: circleSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // 5. Output webp and png files
  await sharp(circularMaster)
    .webp({ quality: 95 })
    .toFile('public/avatar-square.webp');

  await sharp(circularMaster)
    .png()
    .toFile('public/avatar.png');

  // 6. Generate Favicon PNGs
  await sharp(circularMaster)
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  await sharp(circularMaster)
    .resize(16, 16)
    .png()
    .toFile('public/favicon-16x16.png');

  await sharp(circularMaster)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // 7. Base64 for SVG embedding
  const iconBuffer = await sharp(circularMaster).resize(96, 96).png().toBuffer();
  const base64Icon = iconBuffer.toString('base64');

  // 8. Update favicon.svg
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <image href="data:image/png;base64,${base64Icon}" x="0" y="0" width="32" height="32" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', faviconSvg, 'utf-8');

  // 9. Update logo.svg (used in OpenGraph / Schema / fallback)
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 44" width="176" height="44" fill="none">
  <rect x="2" y="2" width="40" height="40" rx="20" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1" />
  <image href="data:image/png;base64,${base64Icon}" x="4" y="4" width="36" height="36" />
  <text x="50" y="27" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif" font-weight="800" font-size="16" fill="#18334B" letter-spacing="-0.02em">机场 Wiki</text>
  <rect x="122" y="15" width="46" height="18" rx="4" fill="#E2E8F0"/>
  <text x="127" y="27.5" font-family="JetBrains Mono, monospace" font-size="9.5" font-weight="700" fill="#475569">GEO 1.0</text>
</svg>`;
  fs.writeFileSync('public/logo.svg', logoSvg, 'utf-8');

  // Clean up test files
  const testFiles = ['public/test-contain.png', 'public/test-cover.png', 'public/test-face-key.png', 'public/test-face-key-0.png', 'public/test-padded-circle.png', 'public/test-circle-clipped.png', 'public/test-circle-perfect.png'];
  for (const f of testFiles) {
    if (fs.existsSync(f)) fs.unlinkSync(f);
  }

  console.log('Avatar and branding assets successfully processed!');
}

processAvatar().catch(err => {
  console.error(err);
  process.exit(1);
});
