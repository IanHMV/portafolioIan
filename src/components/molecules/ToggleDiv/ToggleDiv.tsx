
import { useState } from 'react'
import Text from '../../atoms/Text/Text';

import type { TextProps } from '../../atoms/Text/Text';

export type ToggleDivProps = {
    className?:string;
    classNamePre?:string;
    classNameInfo?:string;
    title:TextProps[];
    subtitle:TextProps;
    info:TextProps[];
}

const ToggleDiv = ({
    className,
    classNamePre,
    classNameInfo,
    title,
    info
}:ToggleDivProps ) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${className??""} `} >

            {/* Informacion Preliminar */}
            <div className={` ${classNamePre??""}`} onClick={() => { setOpen(!open) }}>
                <div>
                    {title.map((item,i) =>(
                    <Text key={i} {...item}></Text>
                ))}
                </div>
                <span className='flex items-center justify-center text-gray-400'>{open ? "▲" : "▼"}</span>
            </div>

            {/* Informacion detallada */}
            <div  className={`${open ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"} ${classNameInfo??""}`} >
                {info.map((item,i) =>(
                    <Text key={i} {...item}> {item.children}</Text>
                ))}

            </div>
        </div>
    )
}

export default ToggleDiv