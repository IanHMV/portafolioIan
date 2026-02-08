import type React from "react";

export type ListItemProps = {
    children:React.ReactNode;
    className?:string;
}

const ListItem = ({children, className}:ListItemProps) =>{
    return (
        <li className={`${className?? ""}`}>
            {children}
        </li>
    )
}

export default ListItem;