export type IconsTypes = "home" | "search" | "user" | "settings" | "github" | "linkedin" | "phone" | "sun" | "moon" | "bars";

export type IconProps = {
  name: IconsTypes;
  size?: number;
  className?: string;
};

const BootstrapIcons: Record<IconsTypes, string> = {
  home: "bi-house-door-fill",
  search: "bi-search",
  user: "bi-person-fill",
  settings: "bi-gear-fill",
  github: "bi-github",
  linkedin:"bi-linkedin",
  phone:"bi-phone-fill",
  sun:"bi-brightness-low-fill",
  moon:"bi-moon-fill",
  bars:"bi-grid-fill"
};

const Icon = ({ name, size, className }: IconProps) => {
  const icon = BootstrapIcons[name];

  return (
    <i
      className={`bi ${icon} ${className ?? ""}`}
      style={{ fontSize: size }}
    />
  );
};

export default Icon;
