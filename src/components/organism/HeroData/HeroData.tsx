import ImageText from "../../molecules/ImageText/ImageText";
import Link from "../../atoms/Link/Link";
import type { LinkProps } from "../../atoms/Link/Link";
import type { ImageTextProps } from "../../molecules/ImageText/ImageText";

export type HeroDataProps = {
    className?: string;
    containerImgText?: string;
    containerButtons?:string;
    imageText: ImageTextProps;
    links:LinkProps[];
}

const HeroData = ({ className,imageText,containerImgText,containerButtons,links }: HeroDataProps) => {
    return (

        <section className={`${className ?? ""}`}>
            
            <div className={`${containerImgText ?? ""}`}>
                <ImageText {...imageText}></ImageText>
                
            </div>

            <div className={`${containerButtons ?? ""}`}>
                {links.map((item, i) =>(
                    <Link key={i} {...item}>
                        {item.children}
                    </Link>
                ))}
            </div>

        </section>

    )
}

export default HeroData;