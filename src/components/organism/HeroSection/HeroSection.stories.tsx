import type { Meta, StoryObj } from "@storybook/react-vite";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Organism/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    logo: {
      src: "/img/Logo.svg",
      alt: "Ian Martinez logo",
    },
    heading: {
      children: "Ian Martinez",
      size: "text-5xl",
      className: "sm:text-6xl md:text-7xl",
    },
    description: {
      children:
        "Frontend Developer building clean, modern interfaces that are fast, accessible, and a joy to use.",
    },
    primaryAction: {
      label: "View projects",
      href: "#projects",
    },
    secondaryAction: {
      label: "Contact me",
      href: "#contact",
    },
  },
};
