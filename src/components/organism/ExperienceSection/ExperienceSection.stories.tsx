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
    className: "bg-zinc-950 min-h-svh",
    title: {
      as: "h2",
      size: "text-4xl",
      className: "text-white font-bold tracking-tight",
      children: "Experience",
    },
    description: {
      as: "p",
      size: "text-base",
      weight: "font-normal",
      className: "text-gray-400 max-w-xl py-3",
      children:
        "A file cabinet of the places and projects that shaped me. Hover a folder to peek inside; click it to pull out the full sheet.",
    },
    folders: [
      {
        label: "Frontend Developer",
        color: "#8f2d56",
        preview: {
          code: "01A",
          note: "Placeholder role. Swap with your real experience.",
          date: "2024 — present",
        },
        sheet: {
          fileNo: "Nº 01",
          heading: "Frontend Developer",
          period: "2024 — present · Remote",
          paragraphs: [
            "Placeholder description — replace with what you built, the stack you used and the impact it had.",
            "A second paragraph can cover collaboration, tooling or anything worth telling.",
          ],
        },
      },
      {
        label: "Freelance Projects",
        color: "#e4572e",
        preview: {
          code: "02B",
          note: "Client work and personal commissions.",
          date: "2023 — 2024",
        },
        sheet: {
          fileNo: "Nº 02",
          heading: "Freelance Projects",
          period: "2023 — 2024 · Remote",
          paragraphs: [
            "Placeholder description — landing pages, small apps and everything in between.",
          ],
        },
      },
      {
        label: "Open Source",
        color: "#0f8a5f",
        preview: {
          code: "03C",
          note: "Contributions and experiments in public.",
          date: "2023",
        },
        sheet: {
          fileNo: "Nº 03",
          heading: "Open Source",
          period: "2023 · GitHub",
          paragraphs: [
            "Placeholder description — issues, pull requests and the lessons that came with them.",
          ],
        },
      },
      {
        label: "Studies & Certifications",
        color: "#2b4bdb",
        preview: {
          code: "04D",
          note: "Formal education and self-directed learning.",
          date: "2021 — 2023",
        },
        sheet: {
          fileNo: "Nº 04",
          heading: "Studies & Certifications",
          period: "2021 — 2023",
          paragraphs: [
            "Placeholder description — degrees, courses and certifications that back your craft.",
          ],
        },
      },
      {
        label: "First Steps in Code",
        color: "#5b2a86",
        preview: {
          code: "05E",
          note: "Where it all started.",
          date: "2020",
        },
        sheet: {
          fileNo: "Nº 05",
          heading: "First Steps in Code",
          period: "2020",
          paragraphs: [
            "Placeholder description — the first project, the first bug and the moment you got hooked.",
          ],
        },
      },
    ],
  },
};
