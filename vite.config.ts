import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// Multi-page Vite config. Each .html file at the project root becomes a
// route in the production build, e.g. dist/index.html, dist/privacy.html,
// dist/support.html, dist/terms.html. Apple's reviewer (and SEO crawlers)
// can fetch the support / privacy URLs directly without an SPA fallback.
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        support: resolve(__dirname, 'support.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
});
