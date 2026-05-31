import type { IconProps } from "./Icon.types";

const iconMap: Record<NonNullable<IconProps["icon"]>, string> = {
  git: "fa-solid fa-code-branch",
  home: "fa-solid fa-house",
  settings: "fa-solid fa-gear",
}


const Icon = ({
  icon,
  label,
  className = "",
  size = "text-base"
}: IconProps) => {
  return (
    <span className={`${size} ${className}`} aria-hidden={!label} aria-label={label}><i className={`${iconMap[icon]}`}></i></span>
  );
}

export default Icon;