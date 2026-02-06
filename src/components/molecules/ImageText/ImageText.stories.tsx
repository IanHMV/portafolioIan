
import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageText from "./ImageText";

const meta: Meta <typeof ImageText> ={
    title:"Molecules/ImageText",
    component:ImageText,
    argTypes:{
        label:{control:"text"},
        src:{control:"text"},
        alt:{control:"text"},
        size:{control:"number"},
    }
} satisfies Meta<typeof ImageText>

export default meta;

type Story = StoryObj<typeof ImageText>

export const Default: Story = {
    args:{
        label:"IanMartinez",
        src:"./vite.svg",
        alt:"Logo",
        size:25
    }
}