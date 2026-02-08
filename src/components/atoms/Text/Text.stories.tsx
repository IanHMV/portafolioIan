import type { Meta, StoryObj } from "@storybook/react-vite";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "p","label", "span"],
    },
    className: { control: "text" },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
    args:{
        children:"Heading 1",
        variant: "h1",
        className:"text-4xl font-bold"
    }
}

export const Heading2: Story = {
    args:{
        children:"Heading 2",
        variant: "h2",
        className:"text-3xl font-semibold"
    }
}


export const Heading3: Story = {
    args:{
        children:"Heading 3",
        variant: "h3",
        className:"text-2xl font-medium"
    }
}


export const Paragraph: Story = {
    args:{
        children:"This is a paragraph",
        variant: "p",   
        className:"text-base"
    }
}


export const Span: Story = {
    args:{
        children:"Span text",
        variant: "span",
        className:"text-base"
    }
}

export const Label: Story = {
    args:{
        children:"Label text",
        variant: "label",
        className:"text-sm font-medium"
    }
}