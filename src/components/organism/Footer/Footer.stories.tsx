import type { Meta, StoryObj } from "@storybook/react-vite";

import Footer from "./Footer";
import type { SocialRingItems } from "../../molecules/SocialRing/SocialRing.types";

const social: SocialRingItems = [
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
    /* las perillas sueltas (size, badgeSize, minBadges, spinDuration…)
       tienen sliders en Molecules/SocialRing; aquí se edita el objeto */
    ring: { control: { type: "object" } },
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

/** Sin logo, sin botón y sin enlaces: solo el anillo y el copyright. */
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
    ring: { size: 240, badgeSize: 56 },
    copyright: "© 2026 Ian Martinez",
  },
};

/** Anillo quieto: para revisar tipografía y contraste sin persecución. */
export const StillRing: Story = {
  args: {
    ...Default.args!,
    ring: { spinDuration: 0 },
  },
};
