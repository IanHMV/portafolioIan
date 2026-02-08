import Navbar from "../organism/Navbar/Navbar";
import type { NavbarProps } from "../organism/Navbar/Navbar";

export type MainTemplateProps ={
    children:React.ReactNode;
    navbar:NavbarProps;
    className?:string;
}

const MainTemplate = ({children, navbar,className}:MainTemplateProps) =>{
    return(
        <>
        <Navbar {...navbar} />
        <main className={`${className ?? ""}`}>
            {children}
        </main>
        </>
    );
}

export default MainTemplate;