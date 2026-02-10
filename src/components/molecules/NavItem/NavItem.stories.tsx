import type { Meta, StoryObj } from "@storybook/react-vite";
import NavItem from "./NavItem";

const meta: Meta <typeof NavItem> = {
    title:"Molecules/NavItem",
    component:NavItem,
    argTypes:{
    }
} satisfies Meta <typeof NavItem>

export default meta;

type Story = StoryObj <typeof NavItem>

export const Default: Story = {
  args: {
    liObj: [
      {
        link:{href:"/#", children:"", className:"flex gap-2 items-center "},
        icon: { name: "home", size: 24, className: "" },
        text: { variant: "p", children: "Hola", className: "" },
      },
    ],
  },
};
