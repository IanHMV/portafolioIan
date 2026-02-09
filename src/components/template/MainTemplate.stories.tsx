import type { Meta, StoryObj } from "@storybook/react-vite";
import MainTemplate from "./MainTemplate";

const meta: Meta<typeof MainTemplate> = {
    title: "Template/MainTemplate",
    component: MainTemplate,
    argTypes: {
        className: { control: "text" }
    }
} satisfies Meta<typeof MainTemplate>

export default meta;

type Story = StoryObj<typeof MainTemplate>

export const Default: Story = {

}