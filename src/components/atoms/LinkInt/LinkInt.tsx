import type React from "react";
import { Link } from "react-router-dom";

export type LinkIntProps = {
    href:string;
    className?:string;
    children:React.ReactNode;
}

const LinkInt = ({children, href,className}:LinkIntProps) =>{
    return (
        <Link to={href} className={`${className ?? ""}`}>{children}</Link>
    );
}

export default LinkInt;