import Button from "../../atoms/Button/Button";
import NavItem from "../../molecules/NavItem/NavItem";
import ImageText from "../../molecules/ImageText/ImageText";
import type { ImageTextProps} from "../../molecules/ImageText/ImageText"
import type { ButtonProps } from "../../atoms/Button/Button";
import type { ListItemProps } from "../../molecules/NavItem/NavItem";
import DarkModeToggle, {type DarkModeToggleProps} from "../../atoms/DarkModeToggle/DarkModeToggle";

export type NavbarProps = {
  className?: string;
  classNameLeftDiv?: string;
  classNameNavItems?: string;
  classNameButtons?: string;
  imageText:ImageTextProps;
  navItem:ListItemProps;
  buttonNight: DarkModeToggleProps;
  toggleButton: ButtonProps;
  isMenuOpen:boolean;
};

const Navbar = ({
  className,
  classNameLeftDiv,
  classNameNavItems,
  classNameButtons,
  imageText,
  navItem ,
  buttonNight,
  toggleButton,
  isMenuOpen,
}: NavbarProps) => {

  return (
    <nav className={`${className ?? ""}`}>
      {/* Logo */}
      <div className={classNameLeftDiv ?? ""}>
        <ImageText {...imageText}  />
        <div className={`${classNameButtons??""}`}>
          <Button {...toggleButton} className="md:hidden "></Button>
          <DarkModeToggle {...buttonNight}  className="md:hidden rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer" ></DarkModeToggle>
        </div>
      </div>

      <div className={`${classNameNavItems??""}` }>
        <div className="hidden md:block md:flex md:items-center gap-2">
          <NavItem {...navItem} />
          <DarkModeToggle {...buttonNight}/>
        </div>

        {isMenuOpen && (<NavItem {...navItem} /> )}
        
      </div>
    </nav>
  );
};

export default Navbar;