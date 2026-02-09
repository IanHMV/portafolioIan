import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import LinkIcon from "../LinkIcon/LinkIcon";
import type { LinkIconProps } from "../LinkIcon/LinkIcon";
import type { TextProps } from "../../atoms/Text/Text";
import type { ImageProps } from "../../atoms/Image/Image";

export type CardProyectProps = {
    className?: string;
    classNameOverlay?: string;
    classNameIcons?: string;
    classNameTec?: string;
    image: ImageProps;
    title: TextProps;
    linkIcons: LinkIconProps[];
    tecnologias: TextProps[];
}

const CardProyect = ({ className, classNameOverlay, classNameIcons, classNameTec, image, title, linkIcons, tecnologias }: CardProyectProps) => {
    return (
        <div className={`group w-fit relative overflow-hidden ${className ?? ""}`}>
            <Image className={"w-full h-auto object-cover block"} {...image} />

            {/* Overlay dividido en dos capas */}
            <div className={`absolute inset-0 pointer-events-none ${classNameOverlay ?? ""}`}>

                {/* Capa de fondo oscuro */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Capa de contenido (sin opacity heredada) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">

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