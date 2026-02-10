import { Outlet } from "react-router-dom";
import Navbar from "../components/organism/Navbar/Navbar";
import type { NavbarProps } from "../components/organism/Navbar/Navbar";

const LayInicio = () => {
  const navbarporps: NavbarProps = {
    className: "w-full bg-white shadow px-6 py-3 flex items-center justify-between",
    classNameLeftDiv: "",
    classNameRightDiv: "flex justify-center items-center gap-5",
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
    navItem: {
      liObj: [
        {
        link:{href:"#hero", children:"", className:"flex gap-2 items-center "},
        icon: { name: "home", size: 24, className: "" },
        text: { variant: "p", children: "Inicio", className: "" },
      },
      {
        link:{href:"/#", children:"", className:"flex gap-2 items-center "},
        icon: { name: "user", size: 24, className: "" },
        text: { variant: "p", children: "User", className: "" },
      },
      {
        link:{href:"/#", children:"", className:"flex gap-2 items-center "},
        icon: { name: "settings", size: 24, className: "" },
        text: { variant: "p", children: "Settings", className: "" },
      },
      {
        link:{href:"/#", children:"", className:"flex gap-2 items-center "},
        icon: { name: "search", size: 24, className: "" },
        text: { variant: "p", children: "Search", className: "" },
      },
      ],
    },
    button: {
      children: "Cerrar Sesión",
      disabled: false,
      className: "rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer disable:bg- "
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
