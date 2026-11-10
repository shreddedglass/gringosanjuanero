// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dirección oficial del sitio (canonical, sitemap y vistas previas al compartir)
export default defineConfig({
  site: 'https://gringosanjuanero.com',
  integrations: [sitemap()],

  // Publicar el HTML tal como está escrito (con saltos de línea y sangría),
  // en vez de comprimirlo en una sola línea.
  compressHTML: false,

  // Dejar el CSS y el JavaScript publicados sin comprimir para que se puedan leer.
  vite: {
    build: {
      minify: false,
      cssMinify: false,
    },
  },
});
