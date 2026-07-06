import type { Meta, StoryObj } from "@storybook/react-vite";

import SkillsSection from "./SkillsSection";

const meta: Meta<typeof SkillsSection> = {
  title: "Organism/SkillsSection",
  component: SkillsSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof SkillsSection>;

export default meta;

type Story = StoryObj<typeof SkillsSection>;

export const Default: Story = {
  args: {
    className: "bg-zinc-950",
    title: {
      as: "h2",
      size: "text-4xl",
      className: "text-white font-bold tracking-tight",
      children: "My Skills",
    },
    description: {
      as: "p",
      size: "text-base",
      weight: "font-normal",
      className: "text-gray-400 max-w-xl py-3",
      children:
        "The tools I work with every day. Hover a logo to stop the wheel and read what I do with it.",
    },
    skills: [
      {
        name: "JavaScript",
        icon: { src: "/imgStack/js.svg", alt: "JavaScript logo" },
        description:
          "The language behind everything I build — from DOM logic to async data flows.",
        color: "#f7df1e",
      },
      {
        name: "TypeScript",
        icon: { src: "/imgStack/ts.svg", alt: "TypeScript logo" },
        description:
          "My default for every project: typed props, safer refactors and self-documenting code.",
        color: "#3178c6",
      },
      {
        name: "React",
        icon: { src: "/imgStack/react.svg", alt: "React logo" },
        description:
          "Component-driven UIs with hooks, following Atomic Design and documented in Storybook.",
        color: "#61dafb",
      },
      {
        name: "Node.js",
        icon: { src: "/imgStack/node.svg", alt: "Node.js logo" },
        description:
          "APIs, tooling and scripts on the server side of JavaScript.",
        color: "#83cd29",
      },
      {
        name: "MongoDB",
        icon: { src: "/imgStack/mongodb.svg", alt: "MongoDB logo" },
        description:
          "Document databases for flexible, fast-moving data models.",
        color: "#4faa41",
      },
      {
        name: "CSS",
        icon: { src: "/imgStack/css.svg", alt: "CSS logo" },
        description:
          "Layouts, animation and responsive design — lately with Tailwind CSS v4.",
        color: "#1572b6",
      },
      {
        name: "HTML",
        icon: { src: "/imgStack/html.svg", alt: "HTML5 logo" },
        description:
          "Semantic, accessible markup as the foundation of every interface.",
        color: "#e34f26",
      },
      {
        name: "Git",
        icon: { src: "/imgStack/git.svg", alt: "Git logo" },
        description:
          "Version control with clean branches and readable history on GitHub.",
        color: "#f05033",
      },
    ],
  },
};
