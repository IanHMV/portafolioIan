import type { Meta, StoryObj } from "@storybook/react-vite";
import NavItem from "./NavItem";

const meta: Meta <typeof NavItem> = {
    title:"Molecules/NavItem",
    component:NavItem,
    argTypes:{
        className:{control:"text"}
    }
} satisfies Meta <typeof NavItem>

export default meta;

type Story = StoryObj <typeof NavItem>

export const Default: Story ={
    args:{
        liObj:[
            {
                icon:"home",
                text:"Home"
            },
            {
                icon:"search",
                text:"Search"
            }
        ]
    }
}