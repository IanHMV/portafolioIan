import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Organism/Navbar",
  component: Navbar,
  argTypes: {
    className: { control: "text" },
    classNameLeftDiv: { control: "text" },
    classNameRightDiv: { control: "text" },

    imageText: {
      control: "object",
      description: "Props para el componente ImageText (logo)",
    },
    navItem: {
      control: "object",
      description: "Array de elementos de navegación",
    },
    button: {
      control: "object",
      description: "Props para el botón de acción",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
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
      isDark:false,
      className: "rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer  ",
      onToggle:()=>{},
      disabled:false,
      htmlType:'button'
    },
    toggleButton: {
      children:"",
      onClick:()=>{},
      disabled: false,
      className: "block md:hidden"
    },
  },
};

