import type { Meta, StoryObj } from "@storybook/react-vite";
import LinkExt from "./LinkExt";

const meta: Meta <typeof LinkExt> = {
    title:"Atoms/LinkExt",
    component:LinkExt,
    argTypes:{
        href:{control:"text"},
        className:{control:"text"},
    }

} satisfies Meta<typeof LinkExt>;

export default meta;

type Story = StoryObj <typeof LinkExt>;

export const Default: Story ={
    args:{
        children:"LinkExt a Github",
        href:"#",
        className:"text-xl"
    }
}