import type { Meta, StoryObj } from "@storybook/react-vite";
import DarkModeToggle from "./DarkModeToggle";

const meta: Meta<typeof DarkModeToggle> = {
  title: "Atoms/DarkModeToggle",
  component: DarkModeToggle,
} satisfies Meta<typeof DarkModeToggle>;

export default meta;

type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {
  args:{
    className:"",
    disabled:false,
    htmlType:"button",
    isDark:false,
  }
}