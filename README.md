# Fiore · Astro

Tienda de flores hechas a mano. Sitio estático en Astro: el catálogo se genera como HTML (indexable por Google) y la interactividad (filtros, ficha, carrito, pedido por WhatsApp) es JavaScript ligero sin framework.

## Desarrollo
```
npm install
npm run dev
```

## Productos
Se leen en el build desde la misma API de antes (`GET_PRODUCTS`, ya configurada en Netlify). Si falla, se usa el catálogo local con las fotos de `public/images` (sin precio → "Consultar"). Para ver cambios de la API hay que redeployar (o configurar un build hook).

**Mantén la carpeta `public/images` del repo actual** — el sitio usa esas fotos y `home-photo.avif/webp`.

## Subir al repo (reemplaza la versión Next.js)
```
git checkout -b astro-redesign
# borra los archivos de Next (app/, pages/, next.config.*, etc.) y copia el contenido de esta carpeta en la raíz
git add -A && git commit -m "Rediseño en Astro"
git push -u origin astro-redesign
```
Abre un PR y, al hacer merge a `main`, Netlify despliega con `netlify.toml` (build `npm run build`, publish `dist`). Si Netlify tenía el plugin de Next.js configurado en la UI, quítalo en Site settings → Build & deploy.

Las rutas viejas `/shoping`, `/search` y `/contact` redirigen con 301.
