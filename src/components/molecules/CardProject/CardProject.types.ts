import type { ImageProps } from "../../atoms/Image/Image.types";

export interface CardProjectProps {
  className?: string;

  /** Screenshot del proyecto — ocupa la parte superior de la tarjeta */
  img: Pick<ImageProps, "src" | "alt">;

  /** Nombre del proyecto */
  title: string;

  /** Descripción corta. Se recorta a 2 líneas para que todas las tarjetas
   *  midan lo mismo dentro del carrusel. */
  description: string;

  /** Stack usado — ej: "REACT + TS + DOCKER". Se muestra tal cual junto al
   *  icono de la fila de metadatos. */
  footer?: string;

  /** Repositorio o, si el proyecto no tiene repo público, el sitio publicado.
   *  Es el destino del botón principal cuando no hay `liveUrl`. */
  githubUrl: string;

  /**
   * Sitio publicado, cuando existe *además* del repositorio. Si se informa,
   * el botón principal apunta aquí y el botón circular queda para el repo,
   * que es la configuración para la que está pensado el diseño.
   */
  liveUrl?: string;

  /**
   * Color propio del proyecto como valor CSS válido. Antes pintaba el fondo
   * de la cara trasera; ahora que no hay volteo se usa como fondo del hueco
   * de la imagen, visible mientras esta carga (todas van en lazy). Conviene
   * que sea oscuro para no dar un fogonazo sobre la tarjeta.
   * Default: "#151515"
   */
  backColor?: string;
}
