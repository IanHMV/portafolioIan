import type { BadgeProps } from "./Badge.types";

const Badge = ({
  label,
  className = "",
  color = "bg-red-500",
  size = "w-1/4",
  rounded = "rounded-md"
}: BadgeProps) => {
  return (
    <span className={`${size} ${color} ${rounded} ${className} inline-flex items-center justify-center font-bold`}>
      {label}
    </span>
  );
}

export default Badge;