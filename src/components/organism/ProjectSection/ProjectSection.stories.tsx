import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ProjectSectionProps } from "./ProjectSection.types";

import ProjectSection from "./ProjectSection";

const meta: Meta<typeof ProjectSection> = {
  title: "Organism/ProjectSection",
  component: ProjectSection,
  argTypes: {
  },
} satisfies Meta<typeof ProjectSection>;

export default meta;

type Story = StoryObj<typeof ProjectSection>;

const baseArgs: ProjectSectionProps = {
  description: {
    children: "This is the section area",
    className: ""
  },
  heading: {
    children: "Project Section",
    as: "h1",
    className: "",
    size: "text-2xl"
  },
  cards: {
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
    ],
    className: ""
  },

}

export const Default: Story = {
  args: baseArgs
};