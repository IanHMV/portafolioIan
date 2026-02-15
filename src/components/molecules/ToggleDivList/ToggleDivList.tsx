import { useState } from 'react'
import Text, { type TextProps } from '../../atoms/Text/Text';

type ToggleItemProps = {
    className?: string;
    classNamePre?: string;
    classNameInfo?: string;
    title: TextProps[];
    info: TextProps[];
    isOpen: boolean;
    onClick: () => void;
}

export type ToggleDivListProps = {
    toggleItems: ToggleItemProps[];
};

const ToggleItem: React.FC<ToggleItemProps> = ({ className, classNamePre, classNameInfo, title, info, isOpen, onClick }) => {
    return (
        <div className={`${className ?? ""}`}>
            <div className={`${classNamePre ?? ""}`} onClick={onClick}>
                <div>
                    {title.map((item, i) => (
                        <Text key={i} {...item} />
                    ))}
                </div>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>

            <div className={` 
                ${isOpen ? "max-h-96 opacity-100 p-2" : "max-h-0 opacity-0"}
                ${classNameInfo ?? ""}`
            }>
                {info.map((item, i) => (
                    <Text key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

const ToggleDivList: React.FC<ToggleDivListProps> = ({ toggleItems }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className='space-y-2'>
            {toggleItems.map((item, i) => (
                <ToggleItem
                    key={i}
                    {...item}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    isOpen={openIndex === i} 
                />
            ))}
        </div>
    )
}

export default ToggleDivList