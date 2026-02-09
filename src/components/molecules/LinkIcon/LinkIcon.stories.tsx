import type { Meta, StoryObj } from "@storybook/react-vite";
import LinkIcon from "./LinkIcon";

const meta: Meta<typeof LinkIcon> = {
    title: "Molecules/LinkIcon",
    component: LinkIcon,
    argTypes: {
    }
} satisfies Meta<typeof LinkIcon>

export default meta;

type Story = StoryObj<typeof LinkIcon>

export const Default: Story = {
    args:{
        link:{
            href:"https://github.com/IanHMV",
            className:"",
            children:"",
        },
        icon:{
            name: "home",
            size: 24,
            className: "text-blue-500"
        }

    }
}