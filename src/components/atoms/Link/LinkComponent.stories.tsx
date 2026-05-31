import type { Meta, StoryObj } from "@storybook/react-vite";

import LinkComponent from "./LinkComponent";

const meta: Meta<typeof LinkComponent> = {
  title: "Atoms/LinkComponent",
  component: LinkComponent,
  argTypes: {
  },
} satisfies Meta<typeof LinkComponent>;

export default meta;

type Story = StoryObj<typeof LinkComponent>;

export const Default: Story = {
  args: {
    href: "/",
    children: "link",
    size: "text-base",
    className: ""
  },
};