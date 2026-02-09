

export type MainTemplateProps ={
    children:React.ReactNode;

    className?:string;
}

const MainTemplate = ({children,className}:MainTemplateProps) =>{
    return(
        <>
        <main className={`${className ?? ""}`}>
            {children}
        </main>
        </>
    );
}

export default MainTemplate;