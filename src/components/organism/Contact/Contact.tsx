
import LinkIcon, { type LinkIconProps } from "../../molecules/LinkIcon/LinkIcon"
import Text, { type TextProps } from "../../atoms/Text/Text";

export type ContactProps = {
    id: string;
    className?: string;
    classNameDivTextIcon?: string;
    classNameDivText?: string;
    classNameDivIcons?: string;
    listIcons: LinkIconProps[];
    text: TextProps;
}

const Contact = ({
    id,
    className,
    classNameDivTextIcon,
    classNameDivText,
    classNameDivIcons,
    listIcons,
    text
}: ContactProps) => {
    return (
        <section id={id} className={`${className ?? ""}`}>
            <div className={`${classNameDivTextIcon??""}`}>
                <div className={`${classNameDivText ?? ""}`}>
                    <Text {...text}></Text>
                </div>
                <div className={`${classNameDivIcons ?? ""}`}>
                    {listIcons.map((item, i) => (
                        <LinkIcon key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact