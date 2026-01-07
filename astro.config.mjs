import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://neural-nikitha.github.io',
  base: '/neuralniki.com/',
  outDir: 'docs',          // 👈 THIS IS THE KEY
  vite: {
    plugins: [tailwindcss()],
  },
});
