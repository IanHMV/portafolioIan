type ImgRounded = "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"

export interface ImageProps {
  src: string
  alt: string
  className?: string
  rounded?: ImgRounded
  /**
   * Dimensiones intrínsecas. No fijan el tamaño pintado (el CSS manda), pero
   * le dan al navegador la relación de aspecto antes de descargar el archivo,
   * así reserva el hueco y no recalcula el layout al llegar la imagen.
   */
  width?: number
  height?: number
  /**
   * Para las imágenes visibles sin hacer scroll. Desactiva el lazy loading:
   * aplazar la imagen más grande de la primera pantalla empeora el LCP en vez
   * de mejorarlo.
   */
  priority?: boolean
}
