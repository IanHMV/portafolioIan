import type { Meta, StoryObj } from "@storybook/react-vite";
import CardProyectList from "./CardProyectList";

const meta: Meta<typeof CardProyectList> = {
    title: "Molecules/CardProyectList",
    component: CardProyectList,
    argTypes: {
    }
} satisfies Meta<typeof CardProyectList>

export default meta;

type Story = StoryObj<typeof CardProyectList>

export const Default: Story = {
    args: {
        className:"grid grid-cols-1 gap-5 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4",
        cards: [
            {
                className: "",
                image: {
                    src: "./img/Me.svg",
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
            },
            {
                className: "",
                image: {
                    src: "./img/Me.svg",
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
        ]
    }
}
