import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import type { TextProps } from "../../atoms/Text/Text";
import type { IconProps } from "../../atoms/Icon/Icon";

export type LiArrayObj = {
  icon: IconProps;
  text: TextProps;
};

export type ListItemProps = {
  liObj: LiArrayObj[];
  className?: string;
};

const NavItem = ({ liObj, className }: ListItemProps) => {
  return (
    <>
      {liObj.map((item, i) => (
        <li key={i} className={`${className ?? ""}`}>
          <Icon {...item.icon} />
          <Text {...item.text}>{item.text.children}</Text>
        </li>
      ))}
    </>
  );
};

export default NavItem;
