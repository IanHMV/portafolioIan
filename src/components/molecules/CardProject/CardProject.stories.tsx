import type { Meta, StoryObj } from "@storybook/react-vite";
import CardProject from "./CardProject";
import type { CardProjectProps } from "./CardProject.types";

const meta: Meta<typeof CardProject> = {
  title: "Molecules/CardProject",
  component: CardProject,
} satisfies Meta<typeof CardProject>;

export default meta;

type Story = StoryObj<typeof CardProject>;

const baseArgs: CardProjectProps = {
  img: {
    src: "/img/image2.jpg",
    alt: "Screenshot del proyecto",
  },
  description: "Portafolio personal construido con React, TypeScript y Tailwind CSS.",
  title: "Portafolio Web",
  footer: "2024 · React + TS",
  githubUrl: "https://github.com/IanHMV",
  backColor: "#151515",
};

export const Default: Story = {
  args: baseArgs,
};

export const ColorAzul: Story = {
  args: {
    ...baseArgs,
    backColor: "#0f172a",
  },
};

export const ColorVerde: Story = {
  args: {
    ...baseArgs,
    backColor: "#052e16",
  },
};

export const SinFooter: Story = {
  args: {
    ...baseArgs,
    footer: undefined,
  },
};