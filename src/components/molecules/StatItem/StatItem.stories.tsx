import type { Meta, StoryObj } from "@storybook/react-vite";

import StatItem from "./StatItem";

const meta: Meta<typeof StatItem> = {
  title: "Molecules/StatItem",
  component: StatItem,
  argTypes: {
  },
} satisfies Meta<typeof StatItem>;

export default meta;

type Story = StoryObj<typeof StatItem>;

export const Default: Story = {
  args: {
    value: "7",
    label: "Projects",
    className: "",
    textClassName: "",
    valueClassName: ""
  },
};