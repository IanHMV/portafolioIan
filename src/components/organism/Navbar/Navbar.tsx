import Button from "../../atoms/Button/Button";
import NavItem from "../../molecules/NavItem/NavItem";
import ImageText from "../../molecules/ImageText/ImageText";
import type { ImageTextProps} from "../../molecules/ImageText/ImageText"
import type { ButtonProps } from "../../atoms/Button/Button";
import type { ListItemProps } from "../../molecules/NavItem/NavItem";

export type NavbarProps = {
  className?: string;
  classNameLeftDiv?: string;
  classNameRightDiv?: string;
  imageText:ImageTextProps;
  navItem:ListItemProps;
  button: ButtonProps;
};

const Navbar = ({
  className,
  classNameLeftDiv,
  classNameRightDiv,
  imageText,
  navItem ,
  button,
}: NavbarProps) => {
  return (
    <nav className={`${className ?? ""}`}>
      {/* Logo */}
      <div className={classNameLeftDiv ?? ""}>
        <ImageText {...imageText}  />
      </div>

      <div className={classNameRightDiv}>
        <NavItem {...navItem} />
        <Button {...button}>{button.children}</Button>
      </div>
    </nav>
  );
};

export default Navbar;