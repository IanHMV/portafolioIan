import type { Meta, StoryObj } from "@storybook/react-vite";

import StatGroup from "./StatGroup";

const meta: Meta<typeof StatGroup> = {
  title: "Molecules/StatGroup",
  component: StatGroup,
  argTypes: {
  },
} satisfies Meta<typeof StatGroup>;

export default meta;

type Story = StoryObj<typeof StatGroup>;

export const Default: Story = {
  args: {
    stats: [
      {
        value: "7",
        label: "Projects",
        className: "",
        textClassName: "",
        valueClassName: ""
      },
      {
        value: "7",
        label: "Projects",
        className: "",
        textClassName: "",
        valueClassName: ""
      }
    ],
    className: "w-42",
    variant: "border-solid",
  },
};