"use client";

import type { ButtonIconProps } from "./ButtonIcon.types";

const iconMap: Record<NonNullable<ButtonIconProps["icon"]>, string> = {
  git: "fa-solid fa-code-branch",
  home: "fa-solid fa-house",
  settings: "fa-solid fa-gear",
}


const ButtonIcon = ({
  icon = "settings",
  label,
  onClick,
  size = "text-base",
  className = "",
  disabled = false
}: ButtonIconProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`${size} ${className}`}>

      <i className={`${iconMap[icon]}`}></i>
    </button>
  );
}

export default ButtonIcon;