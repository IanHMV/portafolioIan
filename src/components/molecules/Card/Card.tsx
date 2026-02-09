import ImageText from "../ImageText/ImageText"
import type { ImageTextProps } from "../ImageText/ImageText"


export type CardProps = {
    className?: string;
    classNameDivText?: string;
    imageText: ImageTextProps;
};

const Card = ({ className, imageText,  }: CardProps) => {
    return (
        <div className={`${className?? ""}`}>

            <ImageText {...imageText} />

        </div>
    );
};

export default Card;