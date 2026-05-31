import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
  argTypes: {
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    as: "h1",
    size: 'text-xl',
    className: "",
    children: 'Example Title'
  },
};