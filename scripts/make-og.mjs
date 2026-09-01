/**
 * Genera public/og.png — la imagen que sale en la tarjeta cuando alguien
 * pega el enlace del sitio en LinkedIn, WhatsApp, Slack o Discord.
 *
 * Por qué un script y no un PNG suelto: la tarjeta tiene que decir lo mismo
 * que el sitio (mismo fondo, misma tinta, mismo emblema), y cuando cambie el
 * puesto o la pila hay que poder regenerarla en un comando en vez de abrir
 * un editor de imágenes. El emblema sale del MISMO Logo.svg que usa la
 * página, así que no hay dos versiones del logo que se puedan desincronizar.
 *
 * Uso:  node scripts/make-og.mjs
 *
 * 1200x630 es la medida que recortan bien todas las plataformas. Si cambias
 * el tamaño, hay que tocar también og:image:width/height en index.html.
 */
import { readFile, stat } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;

/* Los mismos tokens de styles/index.css. No se importan de ahí porque son
   custom properties de CSS y esto es Node: si cambian allí, cambian aquí. */
const SURFACE = "#12141a";
const INK = "#eceef2";
const INK_DIM = "#7e8492";

/* Inter y Outfit son fuentes web: no están instaladas en la máquina que
   ejecuta esto, así que sharp cae a la primera del sistema que encuentre.
   La lista va de la del sitio a la del sistema para que el resultado se
   parezca lo máximo posible en cualquier equipo. */
const FONT = "Inter, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const NAME = "Ian Martínez";
const ROLE = "Frontend Developer";
const STACK = "React · TypeScript · Tailwind";
const SITE = "ianmartinez.dev";

/* El emblema está dibujado con `currentColor` para que la página lo pinte
   con su tinta. Fuera del navegador no hay color heredado —saldría negro
   sobre fondo negro—, así que se sustituye antes de rasterizar. */
const logo = await readFile("public/img/Logo.svg", "utf8");
const logoPng = await sharp(Buffer.from(logo.replaceAll("currentColor", INK)))
  .resize(96, 96, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

/* Fondo: el degradado del hero (halo arriba, fondo plano abajo) y el marco
   de un pelo que llevan todas las superficies elevadas del sitio. El
   nombre repite el degradado de tinta de los titulares. */
const background = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="halo" cx="50%" cy="0%" r="85%">
      <stop offset="0%" stop-color="${INK}" stop-opacity="0.10" />
      <stop offset="70%" stop-color="${INK}" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${INK}" />
      <stop offset="100%" stop-color="${INK_DIM}" />
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${SURFACE}" />
  <rect width="${W}" height="${H}" fill="url(#halo)" />
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" rx="28"
        fill="none" stroke="${INK}" stroke-opacity="0.12" stroke-width="2" />

  <text x="96" y="330" font-family="${FONT}" font-size="104" font-weight="600"
        letter-spacing="-3" fill="url(#ink)">${NAME}</text>

  <text x="96" y="402" font-family="${FONT}" font-size="44" font-weight="500"
        fill="${INK_DIM}">${ROLE}</text>

  <line x1="96" y1="470" x2="${W - 96}" y2="470"
        stroke="${INK}" stroke-opacity="0.12" stroke-width="2" />

  <text x="96" y="528" font-family="${FONT}" font-size="30" font-weight="500"
        letter-spacing="0.5" fill="${INK_DIM}">${STACK}</text>

  <text x="${W - 96}" y="528" text-anchor="end" font-family="${FONT}"
        font-size="30" font-weight="500" letter-spacing="1"
        fill="${INK}" fill-opacity="0.8">${SITE}</text>
</svg>`;

await sharp(Buffer.from(background))
  .composite([{ input: logoPng, top: 96, left: 96 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");

const { size } = await stat("public/og.png");
console.log(`public/og.png  ${W}x${H}  ${(size / 1024).toFixed(1)} KB`);
