import sharp from 'sharp';
import fs from 'node:fs';

async function processAvatar() {
  const input = 'public/avatar.webp';

  // 1. Generate clean square avatar 180x180 png and webp
  await sharp(input)
    .resize(180, 180, { fit: 'cover', position: 'top' })
    .png()
    .toFile('public/avatar.png');

  await sharp(input)
    .resize(180, 180, { fit: 'cover', position: 'top' })
    .webp({ quality: 95 })
    .toFile('public/avatar-square.webp');

  // 2. Generate Favicon PNGs
  await sharp('public/avatar.png')
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  await sharp('public/avatar.png')
    .resize(16, 16)
    .png()
    .toFile('public/favicon-16x16.png');

  await sharp('public/avatar.png')
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // 3. Create embedded base64 for SVG
  const pngBuffer = await sharp('public/avatar.png').resize(80, 80).png().toBuffer();
  const base64Png = pngBuffer.toString('base64');

  // 4. Update favicon.svg
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <clipPath id="circleClip">
      <circle cx="16" cy="16" r="15" />
    </clipPath>
  </defs>
  <circle cx="16" cy="16" r="16" fill="#18334B" />
  <image href="data:image/png;base64,${base64Png}" x="1" y="1" width="30" height="30" clip-path="url(#circleClip)" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', faviconSvg, 'utf-8');

  // 5. Update logo.svg (embedded mascot avatar)
  const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 40" width="168" height="40" fill="none">
  <defs>
    <clipPath id="avatarClip">
      <rect x="4" y="4" width="32" height="32" rx="16" />
    </clipPath>
  </defs>
  <rect x="4" y="4" width="32" height="32" rx="16" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1" />
  <image href="data:image/png;base64,${base64Png}" x="4" y="4" width="32" height="32" clip-path="url(#avatarClip)" />
  <text x="44" y="25" font-family="-apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif" font-weight="800" font-size="16" fill="#18334B" letter-spacing="-0.02em">机场 Wiki</text>
  <rect x="116" y="14" width="44" height="16" rx="3" fill="#E2E8F0"/>
  <text x="121" y="25.5" font-family="JetBrains Mono, monospace" font-size="9" font-weight="700" fill="#475569">GEO 1.0</text>
</svg>`;
  fs.writeFileSync('public/logo.svg', logoSvg, 'utf-8');

  console.log('Avatar processing complete!');
}

processAvatar().catch(err => {
  console.error(err);
  process.exit(1);
});
