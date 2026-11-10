import { getCollection } from 'astro:content';

export const ETIQUETA_A_PAGINA = { explorar: 'explorar', alojamiento: 'hospedarse', comida: 'comer' } as const;
export const PAGINA_A_ETIQUETA = { explorar: 'explorar', hospedarse: 'alojamiento', comer: 'comida' } as const;
export const NOMBRE_ETIQUETA = { explorar: 'Explorar', alojamiento: 'Alojamiento', comida: 'Comida' } as const;

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.borrador);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getLugares(pagina?: 'explorar' | 'hospedarse' | 'comer') {
  const all = await getCollection('lugares', ({ data }) => !data.borrador && (!pagina || data.pagina === pagina));
  return all.sort((a, b) => a.data.nombre.localeCompare(b.data.nombre, 'es'));
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function readingTime(text = '') {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function tiktokId(url?: string) {
  if (!url) return undefined;
  // Acepta enlace normal (/video/123), enlace del reproductor (/player/v1/123),
  // el código <iframe> completo pegado tal cual, o solo el número.
  const m = url.match(/(?:video|player\/v1)\/(\d{10,})/) || url.trim().match(/^(\d{10,})$/);
  return m ? m[1] : undefined;
}

export function mapsLink(ubicacion?: string, mapsUrl?: string) {
  if (mapsUrl) return mapsUrl;
  if (ubicacion) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`;
  return undefined;
}

export function mapsEmbed(ubicacion?: string) {
  if (!ubicacion) return undefined;
  return `https://maps.google.com/maps?q=${encodeURIComponent(ubicacion)}&z=14&output=embed`;
}

export function slugify(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
