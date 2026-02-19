import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://bernardodiasdacruz.com',
  integrations: [
    AutoImport({
      imports: [
        './src/components/Video.astro',
        './src/components/Codepen.astro',
        './src/components/ImageFigure.astro',
        './src/components/Animation.astro',
        './src/components/SankeyChart.astro',
      ],
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});
