import LinkWithA from "../../atoms/LinkWithA/LinkWithA"
import Icon from "../../atoms/Icon/Icon"
import type { LinkWithAProps} from "../../atoms/LinkWithA/LinkWithA"
import type { IconProps } from "../../atoms/Icon/Icon"

export type LinkIconProps ={
    link:LinkWithAProps;
    icon:IconProps;
}

const LinkIcon = ({link, icon}: LinkIconProps) => {
  return (
    <LinkWithA {...link}>
        <Icon {...icon}/>
    </LinkWithA>
  )
}

export default LinkIcon