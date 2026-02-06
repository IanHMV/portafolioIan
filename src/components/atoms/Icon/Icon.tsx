import {
  HomeIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export type IconsTypes = "home" | "search" | "user" | "settings";

export type IconProps = {
  name: IconsTypes;
  size?: number;
  className?: string;
};

const HeroIcons: Record<IconsTypes, React.ElementType> = {
  home: HomeIcon,
  search: MagnifyingGlassCircleIcon,
  user: UserCircleIcon,
  settings: WrenchScrewdriverIcon,
};


const Icon = ({ name, size=24, className }: IconProps) => {
  const Icon = HeroIcons[name];
  return <Icon className={`${className ?? ""}`} style={{ width: size, height: size }} />;
};

export default Icon;
