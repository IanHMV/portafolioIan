import {
  HomeIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export type iconsTypes = "home" | "search" | "user" | "settings";

type iconProps = {
  name: iconsTypes;
  size?: number;
  className?: string;
};

const HeroIcons: Record<iconsTypes, React.ElementType> = {
  home: HomeIcon,
  search: MagnifyingGlassCircleIcon,
  user: UserCircleIcon,
  settings: WrenchScrewdriverIcon,
};


const Icon = ({ name, size=24, className }: iconProps) => {
  const Icon = HeroIcons[name];
  return <Icon className={`w-${size} h-${size} ${className ?? ""}`} />;
};

export default Icon;
