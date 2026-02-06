import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import type { iconsTypes } from "../../atoms/Icon/Icon";

type NavItem = {
    icon:iconsTypes;
    label:string;
}

const baseStyles = "w-full bg-white shadow px-6 py-3 flex items-center justify-between";

const liElements :NavItem[] = [
    {icon:"home", label:"Home"},
    {icon:"search", label:"Search"},
    {icon:"user", label:"User"},
    {icon:"settings", label:"Settings"},
] as const;

const Navbar = () =>{
    return(
        <nav className={baseStyles}>
            {/* Logo */}
            <div className="w-full bg-white shadow flex items-center gap-2">
                <Image src="./vite.svg" alt="Logo" size={30}/>
                <Text variant="h3" className="ml-2" >
                    IanMartinez
                </Text>
            </div>

            <ul className="flex gap-6 items-center">
                {liElements.map((item,i) =>(
                    <li key={i} className="flex items-center gap-1 cursor-pointer">
                        <Icon name={item.icon} size={25}/>
                        <Text variant="span">{item.label}</Text>
                    </li>
                ) )}
            </ul>

        </nav>
    )
}

export default Navbar;