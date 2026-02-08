import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import type { IconsTypes } from "../../atoms/Icon/Icon";

//Propiedades que debe de tener el array de objetos que debe de tener NavItem
export type LiArrayObj = {
  icon: IconsTypes;
  text: string;
};

type ListItemProps = {
  liObj: LiArrayObj[];
  className?:string;
};

const baseStyle = "flex items-center gap-2 cursor-pointer"

const NavItem = ({ liObj, className }: ListItemProps) => {
  return (
    <>
      {liObj.map((item, i) => (
        <li key={i}  className={`${baseStyle} ${className}`}>
          {item.icon && <Icon name={item.icon} size={20}></Icon>}
          <Text variant="span">{item.text}</Text>
        </li>
      ))}
    </>
  );
};

export default NavItem;
