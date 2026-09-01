import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import './styles/index.css'
import App from './App.tsx'

/*
 * El entry ya no monta la app a mano con `createRoot`: lo hace
 * vite-react-ssg, y esa es toda la diferencia entre servir un <div id="root">
 * vacío y servir la página entera en el HTML.
 *
 * Qué hace por dentro:
 * - En `npm run build` renderiza este árbol en Node y escribe el resultado
 *   dentro de dist/index.html. Lo que llega al navegador (y al rastreador de
 *   Google, y al de LinkedIn) ya trae el titular, los proyectos y el footer
 *   en el HTML.
 * - En el navegador HIDRATA ese HTML en vez de volver a pintarlo, así que la
 *   página sigue siendo la misma app de React de siempre.
 *
 * Se usa la variante `/single-page` porque el sitio es una sola página. La
 * variante con rutas existe (`vite-react-ssg` a secas) y es la que habría que
 * usar el día que haya /blog o /projects/:slug de verdad.
 *
 * OJO: el export tiene que llamarse `createRoot` — es el nombre que busca
 * vite-react-ssg en este archivo.
 */
export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
