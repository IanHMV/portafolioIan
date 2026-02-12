import type { Meta, StoryObj } from "@storybook/react-vite";
import StackArea from "./StackArea";

const meta: Meta<typeof StackArea> = {
    title: "Organism/StackArea",
    component: StackArea,
    argTypes: {
    }
} satisfies Meta<typeof StackArea>

export default meta;

type Story = StoryObj<typeof StackArea>

export const Default: Story = {
    args: {
        id: "",
        className: "",
        cards: [
            {
                className: "grid m-auto grid-cols-1 w-7/10 gap-4 sm:grid-cols-2 sm:w-full md:grid-cols-3 lg:grid-cols-4",
                cardList: [
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/react.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "React",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/ts.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "TypeScript",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/js.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "JavaScript",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/mongodb.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "MongoDB",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/node.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "Node",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/git.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "Git",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/html.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "HTML",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                    {
                        className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                        imageText: {
                            className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                            image: {
                                alt: "Image",
                                src: "./imgStack/css.svg",
                                className: "max-w-8/10 min-w-8/10 object-contain",
                                rounded: false,
                            },
                            text: [
                                {
                                    children: "CSS",
                                    className: "text-2xl text-center p-1",
                                    variant: "p",
                                    htmlFor: ""
                                }
                            ]
                        },
                    },
                ]
            }
        ]
    }
}