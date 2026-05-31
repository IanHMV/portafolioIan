import type { TextProps } from "./Text.types";

const Text = ({
  as: Tag = 'p',
  size = "text-base",
  weight = "font-normal",
  className = "",
  children
}: TextProps) => {
  return (
    <Tag className={`outfit ${size} ${weight} ${className}`}>
      {children}
    </Tag>
  );
}

export default Text;