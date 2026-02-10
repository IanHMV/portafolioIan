export type IconsTypes = "home" | "search" | "user" | "settings";

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
};

const Icon = ({ name, size = 24, className }: IconProps) => {
  const icon = BootstrapIcons[name];

  return (
    <i
      className={`bi ${icon} ${className ?? ""}`}
      style={{ fontSize: size }}
    />
  );
};

export default Icon;
