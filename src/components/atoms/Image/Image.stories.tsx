
import type { Meta, StoryObj } from "@storybook/react-vite";
import Image from "./Image";

const meta: Meta<typeof Image > ={
    title:"Atoms/Image",
    component:Image,
    argTypes:{
        src:{control:"text"},
        alt:{control:"text"},
        className:{control:"text"},
        rounded:{control:"boolean"},
    }
} satisfies Meta<typeof Image >

export default meta;

type Story = StoryObj<typeof Image >;

export const Img: Story ={
    args:{
        src:"./vite.svg",
        alt:"vite-icon",
        className:"",
        rounded:false,
        size:100
    }
}