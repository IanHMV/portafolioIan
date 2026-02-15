import ImageText from "../../molecules/ImageText/ImageText";
import LinkWithA, {type LinkWithAProps}from "../../atoms/LinkWithA/LinkWithA";
import type { ImageTextProps } from "../../molecules/ImageText/ImageText";

export type HeroDataProps = {
    className?: string;
    id:string;
    containerImgText?: string;
    containerButtons?:string;
    imageText: ImageTextProps;
    links:LinkWithAProps[];
}

const HeroData = ({ className,id,imageText,containerImgText,containerButtons,links }: HeroDataProps) => {
    return (

        <section id={id} className={`${className ?? ""}`}>
            
            <div className={`${containerImgText ?? ""}`}>
                <ImageText {...imageText}></ImageText>
                
            </div>

            <div className={`${containerButtons ?? ""}`}>
                {links.map((item, i) =>(
                    <LinkWithA key={i} {...item}>
                        {item.children}
                    </LinkWithA>
                ))}
            </div>

        </section>

    )
}

export default HeroData;