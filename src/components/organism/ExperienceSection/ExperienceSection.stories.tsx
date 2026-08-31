import type { Meta, StoryObj } from "@storybook/react-vite";

import ExperienceSection from "./ExperienceSection";

const meta: Meta<typeof ExperienceSection> = {
  title: "Organism/ExperienceSection",
  component: ExperienceSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof ExperienceSection>;

export default meta;

type Story = StoryObj<typeof ExperienceSection>;

export const Default: Story = {
  args: {
    className: "bg-surface min-h-svh",
    eyebrow: "Where I have worked",
    title: {
      as: "h2",
      children: "Four places that turned\npractice into real work.",
    },
    description: {
      children:
        "Every card is a chapter — the short version here, the full story one click away.",
    },
    entries: [
      {
        code: "01",
        title: "Frontend Developer",
        summary: "Placeholder role — swap it for your real experience",
        date: "2024 — present",
        detail: {
          heading: "Frontend Developer",
          period: "2024 — present · Remote",
          paragraphs: [
            "Placeholder description — replace with what you built, the stack you used and the impact it had.",
            "A second paragraph can cover collaboration, tooling or anything worth telling.",
          ],
        },
      },
      {
        code: "02",
        title: "Freelance Projects",
        summary: "Client work and personal commissions",
        date: "2023 — 2024",
        detail: {
          heading: "Freelance Projects",
          period: "2023 — 2024 · Remote",
          paragraphs: [
            "Placeholder description — landing pages, small apps and everything in between.",
          ],
        },
      },
      {
        code: "03",
        title: "Open Source",
        summary: "Contributions and experiments in public",
        date: "2023",
        detail: {
          heading: "Open Source",
          period: "2023 · GitHub",
          paragraphs: [
            "Placeholder description — issues, pull requests and the lessons that came with them.",
          ],
        },
      },
      {
        code: "04",
        title: "Studies",
        summary: "Formal education and self-directed learning",
        date: "2021 — 2023",
        detail: {
          heading: "Studies & Certifications",
          period: "2021 — 2023",
          paragraphs: [
            "Placeholder description — degrees, courses and certifications that back your craft.",
          ],
        },
      },
    ],
  },
};

/*
 * Sin `eyebrow` ni `description`: los dos son opcionales y la cabecera se
 * queda solo con el titular. Sirve para comprobar que el aire de arriba no
 * depende de que existan.
 */
export const TitleOnly: Story = {
  args: {
    ...Default.args,
    eyebrow: undefined,
    description: undefined,
  },
};
