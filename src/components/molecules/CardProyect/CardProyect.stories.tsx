import type { Meta, StoryObj } from "@storybook/react-vite";
import CardProyect from "./CardProyect";

const meta: Meta<typeof CardProyect> = {
    title: "Molecules/CardProyect",
    component: CardProyect,
    argTypes: {
    }
} satisfies Meta<typeof CardProyect>

export default meta;

type Story = StoryObj<typeof CardProyect>

export const Default: Story = {
    args: {
        className: "group w-fit relative overflow-hidden ",
        image: {
            src: "./img/Me.svg",
            alt: "Me",
            className: "rounded-md w-full h-auto object-cover block",
            rounded: false,
            size: 300
        },

        classNameOverlay: "absolute inset-0 pointer-events-none ",
        title: {
            children: "Proyecto",
            variant: "p",
            className: ""
        },

        classNameBgBlack:"absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300",

        classNameLinkText:"absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto",

        classNameIcons: "",
        linkIcons: [
            {
                link: {
                    href: "https://github.com/IanHMV",
                    className: "",
                    children: "",
                },
                icon: {
                    name: "home",
                    size: 24,
                    className: "text-blue-500"
                }
            },
            {
                link: {
                    href: "https://github.com/IanHMV",
                    className: "",
                    children: "",
                },
                icon: {
                    name: "home",
                    size: 24,
                    className: "opacity-100 text-blue-500"
                }
            }
            
        ],

        classNameTec: "",
        tecnologias: [
            {
                children: "Boostrap",
                className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                variant: "span",
            },
            {
                children: "Boostrap",
                className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                variant: "span",
            }
        ]
    }
}