import type { Meta, StoryObj } from "@storybook/react-vite";

import ProjectSection from "./ProjectSection";

const meta: Meta<typeof ProjectSection> = {
  title: "Organism/ProjectSection",
  component: ProjectSection,
  argTypes: {
  },
} satisfies Meta<typeof ProjectSection>;

export default meta;

type Story = StoryObj<typeof ProjectSection>;

export const Default: Story = {
  args: {
    className: "h-screen px-2",
    heading: {
      as: "h3",
      size: "text-3xl",
      className: "py-5",
      children: "Projects Section"
    },
    description: {
      className: "py-5",
      children: "This are my projects"
    },
    cards: {
      className: "flex gap-4",
      cards: [
        {
          title: { children: "Proyecto 1", as: "h3" },
          description: { children: "Descripción del proyecto" },
          img: { src: "/img/image2.jpg", alt: "Proyecto 1" }
        },
        {
          title: { children: "Proyecto 2", as: "h3" },
          description: { children: "Descripción del proyecto" },
          img: { src: "/img/image2.jpg", alt: "Proyecto 2" }
        }
      ]
    }
  }
};