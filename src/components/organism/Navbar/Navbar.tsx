import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import NavItem from "../../molecules/NavItem/NavItem";
import type { LiArrayObj } from "../../molecules/NavItem/NavItem";

const liElements:LiArrayObj[] = [
    {icon:"home", text:"Home"},
    {icon:"search", text:"Search"},
    {icon:"user", text:"User"},
    {icon:"settings", text:"Settings"},
];

const baseStyles = "w-full bg-white shadow px-6 py-3 flex items-center justify-between";



const Navbar = () =>{
    return(
        <nav className={baseStyles}>
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Image src="./vite.svg" alt="Logo" size={30}/>
                <Text variant="h3" className="ml-2" >
                    IanMartinez
                </Text>
            </div>

            <ul className="flex gap-6 items-center">
                <NavItem liObj={liElements} />
                <Button size="sm">Cerrar Sesion</Button>
            </ul>

        </nav>
    )
}

export default Navbar;