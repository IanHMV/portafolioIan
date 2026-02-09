import Link from "../../atoms/Link/Link"
import Icon from "../../atoms/Icon/Icon"
import type { LinkProps } from "../../atoms/Link/Link"
import type { IconProps } from "../../atoms/Icon/Icon"

export type LinkIconProps ={
    link:LinkProps;
    icon:IconProps;
}

const LinkIcon = ({link, icon}: LinkIconProps) => {
  return (
    <Link {...link}>
        <Icon {...icon}/>
    </Link>
  )
}

export default LinkIcon