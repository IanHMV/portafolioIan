import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "./Card";

const meta: Meta<typeof Card> = {
    title: "Organism/Card",
    component: Card,
    argTypes: {
    }
} satisfies Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        className: "p-5 w-3/9 bg-gray-500",
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
};
