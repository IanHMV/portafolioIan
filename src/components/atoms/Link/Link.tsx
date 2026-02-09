import type React from "react";


export type LinkProps = {
    href:string;
    className?:string;
    children:React.ReactNode;
}

const Link = ({children, href,className}:LinkProps) =>{
    return (
        <a href={href} className={`${className ?? ""}`}>{children}</a>
    );
}

export default Link;