import Inicio from "./pages/Inicio"

/*
 * Sin router, a propósito.
 *
 * Antes esto era un <BrowserRouter> con una sola ruta index apuntando a
 * <Inicio />: un enrutador entero para no enrutar nada — el sitio es una
 * página y todo lo demás son anclas (#about, #projects…), que las resuelve
 * el navegador solo.
 *
 * Además `BrowserRouter` lee `window.history` mientras renderiza, así que al
 * prerenderizar en Node reventaba antes de pintar una letra. Quitarlo es lo
 * que permite que el build escriba HTML de verdad (ver src/main.tsx).
 *
 * El día que haya rutas reales (/blog, /projects/:slug), el router vuelve
 * AQUÍ y el entry pasa de `vite-react-ssg/single-page` a la variante con
 * rutas, que prerenderiza una página por ruta.
 *
 * Nota para quien use el átomo LinkComponent: su prop `to` renderiza un
 * <Link> de react-router y ahora mismo no hay Router que lo sostenga en la
 * app (en Storybook sí, por el decorador). Para enlazar dentro del sitio,
 * `href="#seccion"`.
 */
function App() {
  return <Inicio />
}

export default App
