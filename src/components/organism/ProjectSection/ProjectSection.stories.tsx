import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ProjectSectionProps } from "./ProjectSection.types";

import ProjectSection from "./ProjectSection";

const meta: Meta<typeof ProjectSection> = {
  title: "Organism/ProjectSection",
  component: ProjectSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof ProjectSection>;

export default meta;

type Story = StoryObj<typeof ProjectSection>;

const baseArgs: ProjectSectionProps = {
  heading: {
    children: "Projects",
    as: "h2",
    className: "text-white font-bold tracking-tight",
    size: "text-4xl",
  },
  description: {
    children:
      "Some of the things I've built while polishing my craft. Hover a card to pause the carousel and flip it over.",
    className: "text-gray-400 max-w-xl",
  },
  projects: [
    {
      img: { src: "/img/image2.webp", alt: "Portfolio website screenshot" },
      description: "Personal portfolio built with React, TypeScript and Tailwind CSS.",
      title: "Portafolio Web",
      footer: "2024 · React + TS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#151515",
    },
    {
      img: { src: "/img/laptop.png", alt: "Project two screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Two",
      footer: "2024 · React",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#0f2027",
    },
    {
      img: { src: "/img/imgAboutMe.svg", alt: "Project three screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Three",
      footer: "2025 · TypeScript",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#1e293b",
    },
    {
      img: { src: "/img/image2.webp", alt: "Project four screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Four",
      footer: "2025 · Node.js",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#14532d",
    },
    {
      img: { src: "/img/laptop.png", alt: "Project five screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Five",
      footer: "2025 · MongoDB",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#3b0764",
    },
    {
      img: { src: "/img/imgAboutMe.svg", alt: "Project six screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Six",
      footer: "2025 · Tailwind CSS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#7c2d12",
    },
    {
      img: { src: "/img/image2.webp", alt: "Project seven screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Seven",
      footer: "2025 · Storybook",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#134e4a",
    },
  ],
};

export const Default: Story = {
  args: baseArgs,
};
