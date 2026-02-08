
import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageText from "./ImageText";

const meta: Meta <typeof ImageText> ={
    title:"Molecules/ImageText",
    component:ImageText,
    argTypes:{
        image:{ control: "object" },
        text:{ control: "object" },
    }
} satisfies Meta<typeof ImageText>

export default meta;

type Story = StoryObj<typeof ImageText>

export const Default: Story = {
    args:{
        className:"flex gap-2",
        image:{
            alt:"Logo",
            rounded:false,
            size:25,
            src:"./vite.svg",
            className:""
        },
        text:{
            className:"",
            children:"Texto",
            htmlFor:"",
            variant:"p"
        }
    }
}