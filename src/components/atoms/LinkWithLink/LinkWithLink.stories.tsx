import type { Meta, StoryObj } from "@storybook/react-vite";
import LinkWithLink from "./LinkWithLink";

const meta: Meta <typeof LinkWithLink> = {
    title:"Atoms/LinkWithLink",
    component:LinkWithLink,
    argTypes:{
        href:{control:"text"},
        className:{control:"text"},
    }

} satisfies Meta<typeof LinkWithLink>;

export default meta;

type Story = StoryObj <typeof LinkWithLink>;

export const Default: Story ={
    args:{
        children:"Link a cualquier pagina dentro de mi proyecto",
        href:"#",
        className:"text-xl"
    }
}