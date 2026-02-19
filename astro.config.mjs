import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://bernardodiasdacruz.com',
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
