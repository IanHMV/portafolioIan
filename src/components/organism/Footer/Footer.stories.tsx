import type { Meta, StoryObj } from "@storybook/react-vite";

import Footer from "./Footer";
import type { SocialDialItems } from "../../molecules/SocialDial/SocialDial";

const social: SocialDialItems = [
  { id: "gmail", href: "mailto:ianvazquez418@gmail.com", label: "Gmail" },
  { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
  { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
];

const meta: Meta<typeof Footer> = {
  title: "Organism/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    /* las perillas sueltas (tilt, spin, startAngle…) tienen sliders en
       Molecules/SocialDial; aquí se edita el objeto completo */
    dial: { control: { type: "object" } },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    logo: { src: "/img/Logo.svg", alt: "Ian Martinez logo" },
    heading: {
      as: "h2",
      children: "Let's build something together",
    },
    description: {
      children:
        "Frontend developer based in Colima, México. Open to new projects and collaborations — pick a slice and say hi.",
    },
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    social,
    copyright: "© 2026 Ian Martinez — Built with React, TypeScript & Tailwind CSS",
  },
};

/** Sin enlaces ni logo: solo el disco social y el copyright. */
export const Minimal: Story = {
  args: {
    heading: {
      as: "h2",
      children: "Ian Martinez",
    },
    description: {
      children: "Frontend Developer",
    },
    social,
    dial: { size: 170 },
    copyright: "© 2026 Ian Martinez",
  },
};
