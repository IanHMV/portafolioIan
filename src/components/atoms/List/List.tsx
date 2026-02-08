import type React from "react";

export type ListProps ={
    children:React.ReactNode;
    className?:string;
}

const List = ({children, className}:ListProps) =>{
    return(
        <ul className={`${className?? ""} `}>
            {children}
        </ul>
    )
}

export default List;