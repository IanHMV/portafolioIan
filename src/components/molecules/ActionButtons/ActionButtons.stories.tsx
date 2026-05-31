import type { Meta, StoryObj } from "@storybook/react-vite";

import ActionButtons from "./ActionButtons";

const meta: Meta<typeof ActionButtons> = {
  title: "Molecules/ActionButtons",
  component: ActionButtons,
  argTypes: {
  },
} satisfies Meta<typeof ActionButtons>;

export default meta;

type Story = StoryObj<typeof ActionButtons>;

export const Default: Story = {
  args: {
    className: "",
    primary: {
      children: "Button Primary",
      disabled: false,
      onClick: () => { }
    },
    secondary: {
      children: "Button Secondary",
      disabled: false,
      onClick: () => { }
    }
  },
};