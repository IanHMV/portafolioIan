import { Outlet } from "react-router-dom";
import Navbar from "../components/organism/Navbar/Navbar";
import type { NavbarProps } from "../components/organism/Navbar/Navbar";

const LayInicio = () => {
  const navbarporps: NavbarProps = {
    className: "w-full bg-white shadow px-6 py-3 flex items-center justify-between",
    classNameLeftDiv: "",
    classNameRightDiv: "flex gap-5 items-center",
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
    },
    navItem: {
      liObj: [
        {
          icon: { name: "home", className: "", size: 25 },
          text: { children: "Home", className: "", htmlFor: "", variant: "span" },
        },
        {
          icon: { name: "search", className: "", size: 25 },
          text: { children: "Search", className: "", htmlFor: "", variant: "span" },
        },
        {
          icon: { name: "settings", className: "", size: 25 },
          text: { children: "Settings", className: "", htmlFor: "", variant: "span" },
        },
        {
          icon: { name: "user", className: "", size: 25 },
          text: { children: "User", className: "", htmlFor: "", variant: "span" },
        },
      ],
      className: "flex gap-2",
    },
    button: {
      children: "Cerrar Sesión",
      disabled: false,
      className:
        "rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer",
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
