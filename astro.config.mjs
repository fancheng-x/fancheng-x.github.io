import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deployed as the GitHub Pages user site at https://fancheng-x.github.io
export default defineConfig({
  site: 'https://fancheng-x.github.io',
  integrations: [mdx(), sitemap()],
});
