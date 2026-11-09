# gringosanjuanero.com

Sitio del Gringo Sanjuanero, hecho con [Astro](https://astro.build).

## Cómo publicar contenido
Entra a https://app.pagescms.org con tu cuenta de GitHub y elige este repositorio:
- **Blog (artículos):** la etiqueta (explorar / alojamiento / comida) decide en qué página aparece el artículo además del blog.
- **Lugares:** elige la página (explorar / hospedarse / comer). El pueblo, el tipo y "Ideal para" se convierten en filtros automáticamente. Pon 1, 2 o 3 en "Favorito" para que salga en "Los Favoritos del Gringo".
- **Textos de la página de inicio:** lema, fotos, "¿Quién soy?", enlaces de TikTok e Instagram.

Cada vez que guardas, Cloudflare Pages reconstruye el sitio en 1–2 minutos.

## Para desarrolladores
- `npm install` y luego `npm run dev`
- `npm run build` genera el sitio en `dist/`
- Cloudflare Pages: comando de build `npm run build`, carpeta de salida `dist`
- Al conectar el dominio, cambia `site` en `astro.config.mjs`.
