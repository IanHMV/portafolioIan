import type { Meta, StoryObj } from "@storybook/react-vite";
import LinkWithA from "./LinkWithA";

const meta: Meta <typeof LinkWithA> = {
    title:"Atoms/LinkWithA",
    component:LinkWithA,
    argTypes:{
        href:{control:"text"},
        className:{control:"text"},
    }

} satisfies Meta<typeof LinkWithA>;

export default meta;

type Story = StoryObj <typeof LinkWithA>;

export const Default: Story ={
    args:{
        children:"LinkWithA a Github",
        href:"#",
        className:"text-xl"
    }
}