import type { Meta, StoryObj } from "@storybook/react-vite";

import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Organism/HeroSection",
  component: HeroSection,
  argTypes: {
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    className: "flex flex-col items-center justify-center h-screen bg-[#131313]",
    badge: {
      label: 'const developer = "JS_Developer";',
      color: "bg-[#3a3939]",
      className: "text-[#dec800] w-auto text-nowrap py-1 px-2 border-1 border-[#6e6200] mb-5"
    },
    heading: {
      children: "Ian Martinez",
      size: "text-4xl",
      className: "text-[#e5e2e1] py-5"
    },
    description: {
      children: "Hi, I'm a Frontend Developer, i can make different types of webpages that you can imagine.",
      className: "text-[#e5e2e1] py-5"
    },
    actions: {
      className: "py-5",
      primary: {
        children: "View_Projects",
        disabled: false,
        onClick: () => { }
      },
      secondary: {
        children: "Get_In_Touch",
        disabled: false,
        onClick: () => { }
      }
    },
    stats: {
      className: "flex gap-2 py-5",
      variant: "border-solid",
      stats: [
        {
          label: "EXP_YEARS",
          value: "04+",
          className: "flex flex-col justify-center items-center",
          textClassName: "",
          valueClassName: ""
        },
        {
          label: "EXP_YEARS",
          value: "04+",
          className: "flex flex-col justify-center items-center",
          textClassName: "",
          valueClassName: ""
        }
      ]
    },
  }
};