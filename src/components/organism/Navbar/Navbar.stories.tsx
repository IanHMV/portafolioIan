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
    classNameRightDiv: "flex gap-5",
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
      liObj: [{
        icon: {
          name: "home",
          className: "",
          size: 25
        },
        text: {
          children: "Home",
          className: "",
          htmlFor: "",
          variant: "span"
        }
      },
      {
        icon: {
          name: "search",
          className: "",
          size: 25
        },
        text: {
          children: "Search",
          className: "",
          htmlFor: "",
          variant: "span"
        }
      },
      {
        icon: {
          name: "settings",
          className: "",
          size: 25
        },
        text: {
          children: "Settings",
          className: "",
          htmlFor: "",
          variant: "span"
        }
      },
      {
        icon: {
          name: "user",
          className: "",
          size: 25
        },
        text: {
          children: "User",
          className: "",
          htmlFor: "",
          variant: "span"
        }
      }],
      className: "flex gap-2"
    },
    button: {
      children: "Cerrar Sesión",
      disabled: false,
      className: "rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer disable:bg- "
    },
  },
};

