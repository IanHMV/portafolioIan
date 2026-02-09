import type { Meta, StoryObj } from "@storybook/react-vite";
import Link from "./Link";

const meta: Meta <typeof Link> = {
    title:"Atoms/Link",
    component:Link,
    argTypes:{
        href:{control:"text"},
        className:{control:"text"},
    }

} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj <typeof Link>;

export const Default: Story ={
    args:{
        children:"Link a Github",
        href:"https://github.com/",
        className:"text-xl"
    }
}