import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import LinkWithA from "../../atoms/LinkWithA/LinkWithA";
import type { LinkWithAProps } from "../../atoms/LinkWithA/LinkWithA";
import type { TextProps } from "../../atoms/Text/Text";
import type { IconProps } from "../../atoms/Icon/Icon";

export type LiArrayObj = {
  icon: IconProps;
  text: TextProps;
  link:LinkWithAProps;
};

export type ListItemProps = {
  liObj: LiArrayObj[];
  
};

const NavItem = ({ liObj  }: ListItemProps) => {
  return (
    <>
      {liObj.map((item, i) => (
        <LinkWithA key={i} {...item.link}>
          <Icon {...item.icon} />
          <Text {...item.text}>{item.text.children}</Text>
        </LinkWithA>
      ))}
    </>
  );
};

export default NavItem;
