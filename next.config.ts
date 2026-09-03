import type { NextConfig } from "next";

/*
 * `output: "export"` es la pieza clave de esta migración.
 *
 * Con ella Next NO levanta un servidor en producción: en el `build` recorre
 * las rutas, las renderiza y escribe HTML plano en `out/`. Ese HTML ya trae
 * el titular, los proyectos y la experiencia dentro del <body> — que era el
 * problema de fondo del sitio anterior, donde un buscador (o LinkedIn, o
 * WhatsApp) solo encontraba `<div id="root"></div>`.
 *
 * La contrapartida: nada de SSR por petición, ISR ni rutas de API. Para un
 * portafolio de una página no hace falta ninguna de las tres, y a cambio el
 * despliegue sigue siendo el de siempre — nginx sirviendo estáticos, sin un
 * proceso de Node que vigilar.
 */
const nextConfig: NextConfig = {
  output: "export",

  /*
   * Sin servidor no hay optimizador de imágenes, así que `next/image` no
   * puede redimensionar al vuelo. El sitio ya sirve .webp y .svg preparados
   * a mano desde `public/`, de modo que no se pierde nada.
   */
  images: { unoptimized: true },

  /*
   * `/ruta` se escribe como `ruta/index.html` en vez de `ruta.html`. Es lo
   * que hace que nginx la encuentre con la configuración que ya existe, sin
   * añadir reglas de reescritura por cada página nueva.
   */
  trailingSlash: true,
};

export default nextConfig;
