/*
 * Tailwind v4 vía PostCSS. Antes entraba por `@tailwindcss/vite`, que era un
 * plugin del bundler de Vite; Next no usa ese bundler, así que la misma
 * versión de Tailwind se engancha aquí. El CSS de `src/styles/index.css` no
 * cambia ni una línea: sigue siendo `@import "tailwindcss"` y su bloque
 * `@theme`.
 */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
