import type { Meta, StoryObj } from "@storybook/react-vite";
import ListItem from "./ListItem";

const meta:Meta<typeof ListItem> = {
    title: "Atoms/ListItem",
    component: ListItem,
    argTypes:{
        className:{control:"text"}
    }
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "List Item",
        className: "my-list-item"
    }
};