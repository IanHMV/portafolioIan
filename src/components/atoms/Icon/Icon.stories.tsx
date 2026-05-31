import type { Meta, StoryObj } from "@storybook/react-vite";

import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: "settings",
    size: "text-base",
    label: "icon",
    className: ""
  },
};