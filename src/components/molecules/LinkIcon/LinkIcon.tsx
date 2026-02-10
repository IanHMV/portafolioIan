import LinkExt from "../../atoms/LinkExt/LinkExt"
import Icon from "../../atoms/Icon/Icon"
import type { LinkExtProps} from "../../atoms/LinkExt/LinkExt"
import type { IconProps } from "../../atoms/Icon/Icon"

export type LinkIconProps ={
    link:LinkExtProps;
    icon:IconProps;
}

const LinkIcon = ({link, icon}: LinkIconProps) => {
  return (
    <LinkExt {...link}>
        <Icon {...icon}/>
    </LinkExt>
  )
}

export default LinkIcon