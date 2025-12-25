import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Update this when you have your custom domain
  site: 'https://neuralniki.com',
  
  // Enable MDX and Sitemap integrations
  integrations: [
    mdx(),
    sitemap(),
  ],

  // Vite configuration for Tailwind
  vite: {
    plugins: [tailwindcss()]
  },

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  // Build configuration
  build: {
    // Inline small assets
    inlineStylesheets: 'auto'
  }
});