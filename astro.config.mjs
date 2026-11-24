import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichangwiki.biz',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/search/') &&
        !page.includes('/draft/'),
    }),
  ],
  vite: {
    server: {
      watch: {
        ignored: ['**/dist/**', '**/reports/**', '**/data/raw/**'],
      },
    },
  },
});
