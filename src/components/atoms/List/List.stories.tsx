import type { Meta, StoryObj } from "@storybook/react-vite";
import List from "./List";

const meta: Meta<typeof List> ={
    title: "Atoms/List",
    component:List,
    argTypes:{
        className:{control:"text"}
    }
}satisfies Meta<typeof List>

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story ={
    args:{
        className:"",
        children:<li>item1</li>,
    }
}