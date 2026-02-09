import type { Meta, StoryObj } from "@storybook/react-vite";
import CardList from "./CardList";

const meta: Meta<typeof CardList> = {
    title: "Molecules/CardList",
    component: CardList,
    argTypes: {
    }
} satisfies Meta<typeof CardList>

export default meta;

type Story = StoryObj<typeof CardList>

export const Default: Story = {
    args: {
        className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        cardList: [
            {
                className: "p-5 bg-gray-500",
                imageText: {
                    className: "flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                    image: {
                        alt: "Image",
                        src: "./vite.svg",
                        className: "",
                        rounded: false,
                        size: 200,
                    },
                    text: [
                        {
                            children: "React",
                            className: "text-2xl text-center  p-1",
                            variant: "p",
                            htmlFor: ""
                        }
                    ]
                },
            },
            {
                className: "p-5 bg-gray-500",
                imageText: {
                    className: " flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                    image: {
                        alt: "Image",
                        src: "./vite.svg",
                        className: "",
                        rounded: false,
                        size: 200,
                    },
                    text: [
                        {
                            children: "React",
                            className: "text-2xl text-center  p-1",
                            variant: "p",
                            htmlFor: ""
                        }
                    ]
                },
            },
            {
                className: "p-5 bg-gray-500",
                imageText: {
                    className: " flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                    image: {
                        alt: "Image",
                        src: "./vite.svg",
                        className: "",
                        rounded: false,
                        size: 200,
                    },
                    text: [
                        {
                            children: "React",
                            className: "text-2xl text-center  p-1",
                            variant: "p",
                            htmlFor: ""
                        }
                    ]
                },
            },
            {
                className: "p-5 bg-gray-500",
                imageText: {
                    className: " flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                    image: {
                        alt: "Image",
                        src: "./vite.svg",
                        className: "",
                        rounded: false,
                        size: 200,
                    },
                    text: [
                        {
                            children: "React",
                            className: "text-2xl text-center  p-1",
                            variant: "p",
                            htmlFor: ""
                        }
                    ]
                },
            }
        ]
    }
}