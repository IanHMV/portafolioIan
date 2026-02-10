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
        link:{href:"/#", children:"", className:"flex gap-2 items-center "},
        icon: { name: "home", size: 24, className: "" },
        text: { variant: "p", children: "Hola", className: "" },
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
  },
};

