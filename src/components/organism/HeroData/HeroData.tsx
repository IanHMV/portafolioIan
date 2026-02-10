import ImageText from "../../molecules/ImageText/ImageText";
import LinkWithLink from "../../atoms/LinkWithLink/LinkWithLink";
import type { LinkWithLinkProps } from "../../atoms/LinkWithLink/LinkWithLink";
import type { ImageTextProps } from "../../molecules/ImageText/ImageText";

export type HeroDataProps = {
    className?: string;
    id:string;
    containerImgText?: string;
    containerButtons?:string;
    imageText: ImageTextProps;
    links:LinkWithLinkProps[];
}

const HeroData = ({ className,id,imageText,containerImgText,containerButtons,links }: HeroDataProps) => {
    return (

        <section id={id} className={`${className ?? ""}`}>
            
            <div className={`${containerImgText ?? ""}`}>
                <ImageText {...imageText}></ImageText>
                
            </div>

            <div className={`${containerButtons ?? ""}`}>
                {links.map((item, i) =>(
                    <LinkWithLink key={i} {...item}>
                        {item.children}
                    </LinkWithLink>
                ))}
            </div>

        </section>

    )
}

export default HeroData;