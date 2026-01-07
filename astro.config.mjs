import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.neuralniki.com',
  base: '/',
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
