import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar, { type NavbarProps } from "../components/organism/Navbar/Navbar";
import Icon, { type IconProps } from "../components/atoms/Icon/Icon";



const sun: IconProps = {
  name: "sun",
  size: 25,
  className: ""
}

const moon: IconProps = {
  name: "moon",
  size: 25,
  className: ""
}

const bar: IconProps = {
  name: "bars",
  size: 25,
  className: ""
}



const LayInicio = () => {

  const [night, setNight] = useState(false);

  const buttonNight = () => {
    setNight(!night);

  }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu  = () => {
    setIsMenuOpen(!isMenuOpen);

  }

  const navbarporps: NavbarProps = {
    className: "w-full flex flex-col items-center  justify-between bg-white shadow px-6 py-3 fixed z-50 md:flex-row",

    classNameLeftDiv: "w-full flex justify-between items-center",
    classNameButtons:"flex items-center gap-4",

    classNameNavItems: "flex flex-col md:flex-row justify-center items-center mt-4",
    
    imageText: {
      className: "flex gap-2",
      text: [{
        variant: "label",
        children: "IanMartinez",
        className: "",
      }],
      image: {
        src: "./vite.svg",
        alt: "Logo",
        size: 25,
      },
    }
    ,
    isMenuOpen:isMenuOpen,
    navItem: {
      liObj: [
        {
          link: { href: "#hero", children: "", className: "flex gap-2 items-center " },
          icon: { name: "home", size: 24, className: "" },
          text: { variant: "p", children: "Inicio", className: "" },
        },
        {
          link: { href: "#aboutMe", children: "", className: "flex gap-2 items-center " },
          icon: { name: "user", size: 24, className: "" },
          text: { variant: "p", children: "User", className: "" },
        },
        {
          link: { href: "#stackArea", children: "", className: "flex gap-2 items-center " },
          icon: { name: "settings", size: 24, className: "" },
          text: { variant: "p", children: "Stack", className: "" },
        },
        {
          link: { href: "#experienceArea", children: "", className: "flex gap-2 items-center " },
          icon: { name: "search", size: 24, className: "" },
          text: { variant: "p", children: "Experience", className: "" },
        },
        {
          link: { href: "#contact", children: "", className: "flex gap-2 items-center " },
          icon: { name: "phone", size: 24, className: "" },
          text: { variant: "p", children: "Contact", className: "" },
        },
      ],
    },
    buttonNight: {
      children: night ? <Icon {...sun} /> : <Icon {...moon} />,
      onClick: buttonNight,
      disabled: false,
      className: "rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer  "
    },
    toggleButton: {
      children:<Icon {...bar}/>,
      onClick:toggleMenu,
      disabled: false,
      className: "block md:hidden"
    },
  };

  return (
    <>
      <Navbar {...navbarporps} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayInicio;
