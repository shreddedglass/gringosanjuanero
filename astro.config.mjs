// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cuando conectes gringosanjuanero.com, cambia esta línea a 'https://gringosanjuanero.com'
export default defineConfig({
  site: 'https://gringosanjuanero.jchaffee-enso.workers.dev',
  integrations: [sitemap()],
});
