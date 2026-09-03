
type LinkSize = "text-sm" | "text-base" | "text-lg" | "text-xl"

export interface LinkProps {
  to?: string
  href?: string
  size?: LinkSize
  className?: string
  /**
   * Marca el enlace como descarga (`<a download>`). Solo tiene efecto con
   * `href`: la ruta de `Link` es navegación dentro de la SPA, no un fichero.
   * El navegador solo lo respeta en el mismo origen, que es el caso de todo
   * lo que sale de `public/`.
   */
  download?: boolean
  children: React.ReactNode
}