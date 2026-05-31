import type { Meta, StoryObj } from "@storybook/react-vite";

import ButtonIcon from "./ButtonIcon";

const meta: Meta<typeof ButtonIcon> = {
  title: "Atoms/ButtonIcon",
  component: ButtonIcon,
  argTypes: {
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: {
    icon: "settings",
    className: "text-black",
    onClick: () => { },
    disabled: false,
    label: "icon",
    size: "text-base"
  },
};