
import type { DividerProps } from "./Divider.types";

const Divider = ({
  variant = "border-solid",
  color = "border-black",
  size = "border-t",
  className = ""
}: DividerProps) => {
  return (
    <hr role="separator" aria-orientation="horizontal" className={`${variant} ${color} ${size} ${className}`} />
  );
}

export default Divider;