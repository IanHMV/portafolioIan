import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";
import LinkInt from "../../atoms/LinkInt/LinkInt";
import type { LinkIntProps } from "../../atoms/LinkInt/LinkInt";
import type { TextProps } from "../../atoms/Text/Text";
import type { IconProps } from "../../atoms/Icon/Icon";

export type LiArrayObj = {
  icon: IconProps;
  text: TextProps;
  link:LinkIntProps;
};

export type ListItemProps = {
  liObj: LiArrayObj[];
  
};

const NavItem = ({ liObj  }: ListItemProps) => {
  return (
    <>
      {liObj.map((item, i) => (
        <LinkInt key={i} {...item.link}>
          <Icon {...item.icon} />
          <Text {...item.text}>{item.text.children}</Text>
        </LinkInt>
      ))}
    </>
  );
};

export default NavItem;
