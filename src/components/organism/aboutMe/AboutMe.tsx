
import React from 'react'
import Text from '../../atoms/Text/Text'
import Image from '../../atoms/Image/Image'
import type { TextProps } from '../../atoms/Text/Text'
import type { ImageProps } from '../../atoms/Image/Image'

export type AboutMeProps = {
    id:string;
    className?: string;
    classNameDivTextImg?: string;

    title: TextProps;

    classNameParagraph?: string;
    paragraph: TextProps;
    classNameImg?: string;
    image: ImageProps;
}


const AboutMe = ({
    id,
    className,
    classNameDivTextImg,
    title,
    classNameParagraph,
    paragraph,
    classNameImg,
    image
}: AboutMeProps) => {
    return (
        <section id={id} className={`${className ??""}`}>
            <Text {...title}>
                {title.children}
            </Text>
            <div className={`${classNameDivTextImg ??""}`}>

                <div className={`${ classNameParagraph??""}`}>
                    <Text {...paragraph}>
                        {paragraph.children}
                    </Text>
                </div>

                <div className={`${classNameImg ??""}`}>
                    <Image {...image}></Image>
                </div>

            </div>
        </section>
    )
}

export default AboutMe