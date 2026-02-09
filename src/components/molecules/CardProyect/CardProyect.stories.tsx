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
        className: "",
        image: {
            src: "./Me.svg",
            alt: "Me",
            className: "rounded-md",
            rounded: false,
            size: 300
        },

        classNameOverlay: "",
        title: {
            children: "Proyecto",
            variant: "p",
            className: ""
        },

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