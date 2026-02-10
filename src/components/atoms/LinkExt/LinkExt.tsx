import type React from "react";

export type LinkExtProps = {
    href:string;
    className?:string;
    children:React.ReactNode;
}

const LinkExt = ({children, href,className}:LinkExtProps) =>{
    return (
        <a href={href} className={`${className ?? ""}`}>{children}</a>
    );
}

export default LinkExt;