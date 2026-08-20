import type { ImageProps } from "./Image.types";

const Image = ({
  alt,
  src,
  rounded = "rounded-sm",
  className = "",
  width,
  height,
  priority = false
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      // `async` deja que el navegador decodifique fuera del hilo principal.
      // Sin esto, decodificar una imagen grande justo cuando entra en pantalla
      // bloquea el frame y se nota como un tirón al hacer scroll.
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`${rounded} ${className}`}
    />
  );
}

export default Image;
