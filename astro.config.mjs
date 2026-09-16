// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// Replace with the final site domain before deployment.
// sitemap, canonical and robots.txt follow this value.
export default defineConfig({
  site: 'https://activematter.best',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        picomatch: fileURLToPath(new URL('./src/lib/picomatch-shim.mjs', import.meta.url)),
      },
    },
  },
});
