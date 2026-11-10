import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Texto vacío del CMS cuenta como "no puesto"
const opcional = z.string().optional().nullable().transform((v) => (v && v.trim() ? v.trim() : undefined));

// Artículos del blog. La etiqueta decide en qué página aparecen también.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    etiqueta: z.enum(['explorar', 'alojamiento', 'comida']),
    resumen: z.string(),
    portada: opcional,
    video: opcional,
    lugar: opcional,
    comoLlegar: opcional,
    costo: opcional,
    mejorMomento: opcional,
    mapa: opcional,
    consejo: opcional,
    borrador: z.boolean().optional().default(false),
  }),
});

// Lugares para Dónde Explorar / Hospedarse / Comer.
const lugares = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lugares' }),
  schema: z.object({
    nombre: z.string(),
    pagina: z.enum(['explorar', 'hospedarse', 'comer']),
    pueblo: z.string(),
    // Uno o varios tipos (Salto, Río, Playa...). Acepta texto suelto o lista.
    tipo: z.union([z.string(), z.array(z.string())]).transform((v) => (Array.isArray(v) ? v : [v]).map((x) => x?.trim()).filter(Boolean) as string[]),
    dificultad: opcional,
    etiquetas: z.array(z.string()).optional().nullable().transform((v) => (v ?? []).filter((x) => x && x.trim())),
    resumen: z.string(),
    foto: opcional,
    ubicacion: opcional,
    mapsUrl: opcional,
    video: opcional,
    consejo: opcional,
    favorito: z.coerce.number().int().min(0).max(3).optional().nullable().transform((v) => v ?? 0),
    borrador: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, lugares };
