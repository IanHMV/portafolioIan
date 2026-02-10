import type React from "react";

export type LinkWithAProps = {
    href:string;
    className?:string;
    children:React.ReactNode;
}

const LinkWithA = ({children, href,className}:LinkWithAProps) =>{
    return (
        <a href={href} className={`${className ?? ""}`}>{children}</a>
    );
}

export default LinkWithA;