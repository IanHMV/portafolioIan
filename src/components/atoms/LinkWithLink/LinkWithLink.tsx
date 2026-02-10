import type React from "react";
import { Link } from "react-router-dom";

export type LinkWithLinkProps = {
    href:string;
    className?:string;
    children:React.ReactNode;
}

const LinkWithLink = ({children, href,className}:LinkWithLinkProps) =>{
    return (
        <Link to={href} className={`${className ?? ""}`}>{children}</Link>
    );
}

export default LinkWithLink;