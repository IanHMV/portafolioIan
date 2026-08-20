/**
 * Convierte las imágenes de public/ a WebP.
 *
 * Por qué existe: las capturas de proyectos venían en PNG (~1 MB cada una) y
 * la portada de About Me era un GIF de 4.5 MB. Todo eso se decodifica en el
 * hilo principal, que es el mismo que mueve el scroll.
 *
 * Uso:  node scripts/optimize-images.mjs
 *
 * Sobreescribe los .webp que encuentre y no borra los originales: revisar el
 * resultado y decidir qué se elimina es cosa de quien lo ejecuta.
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import sharp from "sharp";

const DIRS = ["public/img", "public/imgStack"];

// Más de esto no aporta nada: la card más grande del sitio no llega a 800px
// de ancho, así que 1600 cubre pantallas retina de sobra.
const MAX_WIDTH = 1600;

// Los GIF animados se reducen bastante más. Con 134 fotogramas, cada píxel de
// ancho se paga 134 veces en trabajo de decodificación, y la portada de About
// Me es un fondo decorativo detrás de un título: la nitidez no es crítica.
const GIF_WIDTH = 400;

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function convert(file) {
  const ext = extname(file).toLowerCase();
  const isGif = ext === ".gif";
  const isRaster = [".png", ".jpg", ".jpeg"].includes(ext);
  if (!isGif && !isRaster) return null;

  const target = join(dirname(file), `${basename(file, ext)}.webp`);
  const before = (await stat(file)).size;

  // `animated: true` conserva todos los fotogramas del GIF; sin esa opción
  // sharp se quedaría solo con el primero.
  let img = sharp(file, { animated: isGif });
  const meta = await img.metadata();

  const targetWidth = isGif ? GIF_WIDTH : MAX_WIDTH;
  if (meta.width > targetWidth) {
    img = img.resize({ width: targetWidth, withoutEnlargement: true });
  }

  // El GIF animado baja más de calidad porque son muchos fotogramas y el
  // ruido de un fondo espacial no se nota; las capturas necesitan más nitidez
  // para que el texto de la UI siga siendo legible.
  const buf = await img.webp({ quality: isGif ? 40 : 82, effort: 6 }).toBuffer();
  await writeFile(target, buf);

  return { file, target, before, after: buf.length, frames: meta.pages ?? 1 };
}

const files = (await Promise.all(DIRS.map(walk))).flat();
const results = [];
for (const f of files) {
  const r = await convert(f);
  if (r) results.push(r);
}

results.sort((a, b) => b.before - a.before);

let totalBefore = 0;
let totalAfter = 0;
for (const r of results) {
  totalBefore += r.before;
  totalAfter += r.after;
  const pct = (100 - (r.after / r.before) * 100).toFixed(0);
  const frames = r.frames > 1 ? ` (${r.frames} fotogramas)` : "";
  console.log(`${r.file}${frames}\n   ${kb(r.before)} -> ${kb(r.after)}  (-${pct}%)`);
}

console.log(`\nTOTAL: ${kb(totalBefore)} -> ${kb(totalAfter)}`);
console.log(`Ahorro: ${kb(totalBefore - totalAfter)}`);
