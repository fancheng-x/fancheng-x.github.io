import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages project site at https://fancheng-x.github.io/portfolio
export default defineConfig({
  site: 'https://fancheng-x.github.io',
  base: '/portfolio',
  integrations: [mdx(), sitemap()],
});
