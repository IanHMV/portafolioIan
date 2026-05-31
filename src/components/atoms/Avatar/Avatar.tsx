import type { AvatarProps } from "./Avatar.types";

const Avatar = ({
  src,
  alt,
  className = "",
  rounded = "rounded-full",
  size = "w-8 h-8"
}: AvatarProps) => {
  return (
    <img src={src} alt={alt} className={`${rounded} ${size} ${className}`} />
  );
}

export default Avatar;