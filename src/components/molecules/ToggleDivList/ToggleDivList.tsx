
import { useState } from 'react'

type ToggleItemProps = {
    title: string;
    details: string;
    isOpen: boolean;
    onClick: () => void;
}

type ToggleDivListProps = {
    items: ItemsProps[];
};


type ItemsProps = {
    title: string;
    details: string;
}

const ToggleItem: React.FC<ToggleItemProps> = ({ title, details, isOpen, onClick }) => {
    return (
        <div className='w-full max-w-md border rounded mb-2'>

            <div className='border flex justify-between p-2 cursor-pointer' onClick={onClick}>
                <h2>{title}</h2>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                    ${isOpen ? "max-h-40 opacity-100 p-2" : "max-h-0 opacity-0"}`} >
                <p>{details}</p>

            </div>


        </div>
    )
}

const ToggleDivList: React.FC<ToggleDivListProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    

    return (
        <div className='space-y-2'>

            {items.map((item, i) => (
                <ToggleItem
                    key={i}
                    title={item.title}
                    details={item.details}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}

        </div>
    )
}

export default ToggleDivList