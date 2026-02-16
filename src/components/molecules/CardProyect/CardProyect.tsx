import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import LinkIcon from "../LinkIcon/LinkIcon";
import type { LinkIconProps } from "../LinkIcon/LinkIcon";
import type { TextProps } from "../../atoms/Text/Text";
import type { ImageProps } from "../../atoms/Image/Image";

export type CardProyectProps = {
    className?: string;
    classNameOverlay?: string;
    classNameBgBlack?: string;
    classNameLinkText?: string;
    classNameIcons?: string;
    classNameTec?: string;
    image: ImageProps;
    title: TextProps;
    linkIcons: LinkIconProps[];
    tecnologias: TextProps[];
}

const CardProyect = ({ className, classNameOverlay, classNameBgBlack, classNameLinkText, classNameIcons, classNameTec, image, title, linkIcons, tecnologias }: CardProyectProps) => {
    return (
        <div className={`${className ?? ""}`}>
            <Image className={""} {...image} />

            {/* Overlay dividido en dos capas */}
            <div className={`${classNameOverlay ?? ""}`}>

                {/* Capa de fondo oscuro */}
                <div className={`${classNameBgBlack ?? ""}`} />

                {/* Capa de contenido (sin opacity heredada) */}
                <div className={`${classNameLinkText ?? ""}`}>

                    <Text {...title} className={`text-white text-xl font-bold mb-2 ${title.className ?? ""}`} />

                    <div className={`flex gap-3 mb-2 ${classNameIcons ?? ""}`}>
                        {linkIcons.map((icon, i) => (
                            <LinkIcon key={i} {...icon} />
                        ))}
                    </div>

                    <div className={`flex gap-2 ${classNameTec ?? ""}`}>
                        {tecnologias.map((tec, i) => (
                            <Text key={i} {...tec} />
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CardProyect