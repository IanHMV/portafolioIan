import type { Meta, StoryObj } from "@storybook/react-vite";
import LinkInt from "./LinkInt";

const meta: Meta <typeof LinkInt> = {
    title:"Atoms/LinkInt",
    component:LinkInt,
    argTypes:{
        href:{control:"text"},
        className:{control:"text"},
    }

} satisfies Meta<typeof LinkInt>;

export default meta;

type Story = StoryObj <typeof LinkInt>;

export const Default: Story ={
    args:{
        children:"Link a cualquier pagina dentro de mi proyecto",
        href:"#",
        className:"text-xl"
    }
}