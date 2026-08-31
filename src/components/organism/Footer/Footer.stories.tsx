import type { Meta, StoryObj } from "@storybook/react-vite";

import Footer from "./Footer";
import type { SocialOrbItems } from "../../molecules/SocialOrbs/SocialOrbs.types";

const social: SocialOrbItems = [
  { id: "gmail", href: "mailto:ianhmv418@gmail.com", label: "Gmail" },
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
    /* las perillas sueltas (orbSize, width, friction, bounce…) tienen
       sliders en Molecules/SocialOrbs; aquí se edita el objeto */
    orbs: { control: { type: "object" } },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    id: "contact",
    logo: { src: "/img/Logo.svg", alt: "Ian Martinez logo" },
    heading: {
      as: "h2",
      children: "Let's build something together",
    },
    description: {
      children:
        "Frontend developer based in México. Open to new projects and collaborations — pick a slice and say hi.",
    },
    action: { label: "Contact me", href: "mailto:ianhmv418@gmail.com" },
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    social,
    copyright: "© 2026 Ian Martinez",
  },
};

/** Sin logo, sin botón y sin enlaces: solo las esferas y el copyright. */
export const Minimal: Story = {
  args: {
    id: "contact",
    heading: {
      as: "h2",
      children: "Ian Martinez",
    },
    description: {
      children: "Frontend Developer",
    },
    social,
    orbs: { width: 260, height: 150, orbSize: 52 },
    copyright: "© 2026 Ian Martinez",
  },
};

/** Esferas pesadas: se paran donde se sueltan. Para revisar la tipografía. */
export const HeavyOrbs: Story = {
  args: {
    ...Default.args!,
    orbs: { friction: 0.82, bounce: 0.1 },
  },
};
