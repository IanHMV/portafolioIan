import ImageText from "../../molecules/ImageText/ImageText";
import LinkInt from "../../atoms/LinkInt/LinkInt";
import type { LinkIntProps } from "../../atoms/LinkInt/LinkInt";
import type { ImageTextProps } from "../../molecules/ImageText/ImageText";

export type HeroDataProps = {
    className?: string;
    containerImgText?: string;
    containerButtons?:string;
    imageText: ImageTextProps;
    links:LinkIntProps[];
}

const HeroData = ({ className,imageText,containerImgText,containerButtons,links }: HeroDataProps) => {
    return (

        <section className={`${className ?? ""}`}>
            
            <div className={`${containerImgText ?? ""}`}>
                <ImageText {...imageText}></ImageText>
                
            </div>

            <div className={`${containerButtons ?? ""}`}>
                {links.map((item, i) =>(
                    <LinkInt key={i} {...item}>
                        {item.children}
                    </LinkInt>
                ))}
            </div>

        </section>

    )
}

export default HeroData;