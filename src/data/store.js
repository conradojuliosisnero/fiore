// Datos de la tienda. Los productos se leen en el build desde la misma API que usaba la versión Next.js
// (variables de entorno GET_PRODUCTS en Netlify). Si la API falla, se usa el catálogo local de abajo.
export const WHATSAPP = '573233330714';
export const PHONES = ['323 333 0714', '301 696 7412'];
export const INSTAGRAM = 'detalles_fiore_';

const LOCAL = [
  ['Lacy', 'lacy.png'], ['Sempiterno', 'sempiterno.png'], ['Amanecer dorado', 'amanecer_dorado.png'],
  ['Amor eterno', 'amor_eterno.png'], ['Atenea', 'atenea.jpg'], ['Besos de rosas', 'besos_de_rosas.png'],
  ['Encanto silvestre', 'encanto_silvestre.png'], ['Fantasía', 'fantasia.png'], ['Genevive', 'genevive.jpg'],
  ['Luz de primavera', 'luz_de_primavera.png'], ['Melodía de colores', 'melodia_de_colores.png'], ['Merlina', 'merlina.jpg'],
  ['Oasis floral', 'oasis_floral.png'], ['Otoño', 'otoño.png'], ['Rayito de sol', 'rayito_de_sol.png'],
  ['Susurro de lavanda', 'susurro_de_lavanda.png'],
].map(([name, file], i) => ({ id: i + 1, name, image: `/images/${file}`, price: null, description: '', details: [], occasions: [] }));

// En la API el precio viene en miles (50 => $50.000), igual que en la versión anterior.
const normalize = (p, i) => ({
  id: p.id ?? i + 1,
  name: p.name ?? p.title ?? `Producto ${i + 1}`,
  image: p.image ?? null,
  price: p.price != null ? Number(p.price) * 1000 : null,
  description: p.description ?? '',
  details: Array.isArray(p.details) ? p.details : [],
  occasions: Array.isArray(p.occasions) ? p.occasions : [],
  section: p.section ?? '',
});

export async function getProducts() {
  const url = import.meta.env.GET_PRODUCTS;
  if (url) {
    try {
      const res = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
      const data = await res.json();
      if (Array.isArray(data) && data.length) return data.map(normalize);
    } catch (e) {
      console.warn('[fiore] No se pudo leer GET_PRODUCTS, usando catálogo local', e);
    }
  }
  return LOCAL;
}

export const fmt = (n) => (n == null ? 'Consultar' : '$' + Math.round(n).toLocaleString('es-CO'));
