import type { Meta, StoryObj } from "@storybook/react-vite";
import CardProjectGroup from "./CardProjectGroup";
import type { CardProjectGroupProps } from "./CardProjectGroup.types";

const meta: Meta<typeof CardProjectGroup> = {
  title: "Molecules/CardProjectGroup",
  component: CardProjectGroup,
} satisfies Meta<typeof CardProjectGroup>;

export default meta;

type Story = StoryObj<typeof CardProjectGroup>;

const baseArgs: CardProjectGroupProps = {
  className: "w-full flex gap-6",
  cards: [
    {
      img: {
        src: "/img/image2.jpg",
        alt: "Screenshot del proyecto",
      },
      description: "Portafolio personal construido con React, TypeScript y Tailwind CSS.",
      title: "Portafolio Web",
      footer: "2024 · React + TS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#151515",
    },
    {
      img: {
        src: "/img/image2.jpg",
        alt: "Screenshot del proyecto",
      },
      description: "Portafolio personal construido con React, TypeScript y Tailwind CSS.",
      title: "Portafolio Web",
      footer: "2024 · React + TS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#151515",
    },
    {
      img: {
        src: "/img/image2.jpg",
        alt: "Screenshot del proyecto",
      },
      description: "Portafolio personal construido con React, TypeScript y Tailwind CSS.",
      title: "Portafolio Web",
      footer: "2024 · React + TS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#151515",
    }
  ]
};

export const Default: Story = {
  args: baseArgs,
};

export const ColorAzul: Story = {
  args: {
    ...baseArgs,
  },
};

export const ColorVerde: Story = {
  args: {
    ...baseArgs,
  },
};

export const SinFooter: Story = {
  args: {
    ...baseArgs,
  },
};