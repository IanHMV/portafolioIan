import ImageText from "../../molecules/ImageText/ImageText"
import type { ImageTextProps } from "../../molecules/ImageText/ImageText"
import type { TextProps } from "../../atoms/Text/Text";

type CardProps = {
    className?: string;
    classNameDivText?: string;
    imageText: ImageTextProps;
    text: TextProps[];
};

const Card = ({ className, imageText,  }: CardProps) => {
    return (
        <div className={`${className?? ""}`}>

            <ImageText {...imageText} />

        </div>
    );
};

export default Card;