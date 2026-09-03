import type { Metadata } from "next";
import Script from "next/script";
import "../styles/index.css";

/*
 * El <head> del sitio. Es el sustituto directo del antiguo `index.html`, con
 * una diferencia que era el motivo de toda la migración: aquí el <body> que
 * se escribe en disco durante el build ya lleva DENTRO el contenido de la
 * página. Antes solo había `<div id="root"></div>` y todo lo demás lo pintaba
 * el bundle en el navegador, así que un buscador —o LinkedIn, o WhatsApp, que
 * ni siquiera ejecutan JavaScript— no encontraba nada que leer.
 */

export const metadata: Metadata = {
  /*
   * OJO, CAMBIO DE CONTENIDO: el título era `portafolioian`, en minúsculas y
   * sin decir de quién es la página. Eso es literalmente el titular que
   * enseña Google en sus resultados, así que se sustituye por el nombre y el
   * puesto — los mismos que ya están en el hero y en el CV, no hay dato
   * nuevo. Para volver atrás, basta con cambiar esta línea.
   */
  title: "Ian Martinez — Frontend Developer",
  description:
    "Frontend Developer building clean, modern interfaces that are fast, accessible, and a joy to use.",
  metadataBase: new URL("https://ianmartinez.dev"),
  alternates: { canonical: "/" },
  icons: { icon: "/img/Logo.svg" },
  /* La tarjeta que se ve al pegar el enlace en redes o mensajería. */
  openGraph: {
    type: "website",
    url: "https://ianmartinez.dev",
    siteName: "Ian Martinez",
    title: "Ian Martinez — Frontend Developer",
    description:
      "Frontend Developer building clean, modern interfaces that are fast, accessible, and a joy to use.",
  },
};

/*
 * Datos estructurados: le dicen al buscador QUIÉN hay detrás del sitio y
 * `sameAs` es lo que le permite unir este dominio con los perfiles de GitHub
 * y LinkedIn como una sola persona.
 */
const personaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ian Martinez",
  jobTitle: "Frontend Developer",
  url: "https://ianmartinez.dev",
  sameAs: ["https://github.com/IanHMV", "https://www.linkedin.com/in/ianhmv/"],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Inter para leer y Outfit para los títulos, en una sola petición:
            dos <link> a Google Fonts son dos viajes de red para lo mismo. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personaJsonLd) }}
        />
      </head>
      <body>
        {children}
        {/* El átomo Icon dibuja con Font Awesome (lo usan las tarjetas de
            proyecto), así que el kit sigue haciendo falta. `afterInteractive`
            lo baja de la ruta crítica: los iconos aparecen un instante
            después, pero no retrasan el primer pintado. */}
        <Script
          src="https://kit.fontawesome.com/82fbe5a20d.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
};

export default RootLayout;
