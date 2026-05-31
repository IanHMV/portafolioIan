import type { ImageProps } from "./Image.types";

const Image = ({
  alt,
  src,
  rounded = "rounded-sm",
  className = ""
}: ImageProps) => {
  return (
    <img src={src} alt={alt} className={`${rounded} ${className}`} />
  );
}

export default Image;