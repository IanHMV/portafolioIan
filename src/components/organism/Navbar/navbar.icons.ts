export type NavIconId =
  | "home"
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "contact";

/*
 * Iconos del dock. Mismo criterio que la flecha del footer: van como SVG
 * dibujados aquí y no por el átomo Icon, que tira de Font Awesome — una
 * petición de red y un <i> con clases para pintar seis figuras que son
 * cuatro líneas cada una.
 *
 * Diferencia con SOCIAL_RING_BRANDS, que también guarda `path` en un
 * viewBox 0 0 24 24: aquellos son logos de marca y van RELLENOS; estos van
 * a TRAZO (`fill: none` + `stroke: currentColor`). Es lo que hace que el
 * icono se aclare solo al activarse — el trazo hereda el color del enlace,
 * así que la transición de color del ítem los anima sin tocar el SVG.
 *
 * Cada icono es una lista de subtrazos y no un único `d` gigante a
 * propósito: con `stroke-linecap: round` cada `<path>` cierra sus extremos
 * por separado, y así el tejado de la casa no se funde con sus paredes.
 */
export const NAV_ICONS: Record<NavIconId, string[]> = {
  home: ["m3 9.4 9-6.9 9 6.9v10.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", "M9.3 21.6v-7.4h5.4v7.4"],
  about: ["M12 3.2a4 4 0 1 0 0 8 4 4 0 0 0 0-8", "M20 21v-1.8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4V21"],
  /* cuadrícula: cuatro fichas = una galería de proyectos */
  projects: ["M3.4 3.4h7v7h-7z", "M13.6 3.4h7v7h-7z", "M13.6 13.6h7v7h-7z", "M3.4 13.6h7v7h-7z"],
  experience: [
    "M4 7.6h16a2 2 0 0 1 2 2v8.8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.6a2 2 0 0 1 2-2z",
    "M8.4 20.4V5.6a2 2 0 0 1 2-2h3.2a2 2 0 0 1 2 2v14.8",
  ],
  /* dos destellos: el oficio, no la herramienta — la sección se llama
     "What I build with" y una llave inglesa la volvía un taller */
  skills: [
    "m11.6 3 1.9 5.1 5.1 1.9-5.1 1.9-1.9 5.1-1.9-5.1L5.6 10l5.1-1.9z",
    "m18.4 15.2.85 2 2 .85-2 .85-.85 2-.85-2-2-.85 2-.85z",
  ],
  /* avión de papel: es el mismo gesto que la lente de la referencia
     ("Message"), y aquí el destino es el footer de contacto */
  contact: ["m21.6 2.4-7.1 19.2-3.8-8.3-8.3-3.8z", "M21.6 2.4 10.7 13.3"],
};
