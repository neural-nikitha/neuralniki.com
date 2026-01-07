import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://neuralniki.com',
  
  // GitHub Pages configuration
  // For GitHub Pages, deploy to neuralniki.github.io with custom domain
  // No base path needed when using custom domain
  
  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  build: {
    inlineStylesheets: 'auto'
  }
});