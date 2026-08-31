import type { Meta, StoryObj } from "@storybook/react-vite";

import { SocialOrbs } from "./SocialOrbs";
import type { SocialOrbItems } from "./SocialOrbs.types";

const social: SocialOrbItems = [
  { id: "gmail", href: "mailto:ianhmv418@gmail.com", label: "Gmail" },
  { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
  { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
];

const meta: Meta<typeof SocialOrbs> = {
  title: "Molecules/SocialOrbs",
  component: SocialOrbs,
  parameters: {
    layout: "centered",
  },
  args: {
    items: social,
  },
  argTypes: {
    orbSize: { control: { type: "range", min: 34, max: 110, step: 2 } },
    width: { control: { type: "range", min: 200, max: 640, step: 10 } },
    height: { control: { type: "range", min: 120, max: 420, step: 10 } },
    friction: { control: { type: "range", min: 0.8, max: 1, step: 0.01 } },
    bounce: { control: { type: "range", min: 0, max: 1, step: 0.02 } },
  },
} satisfies Meta<typeof SocialOrbs>;

export default meta;

type Story = StoryObj<typeof SocialOrbs>;

/** Arrástralas: se empujan entre ellas y rebotan contra las paredes. */
export const Default: Story = {};

/** Las cinco marcas del catálogo (socialOrbs.config.ts), en dos filas. */
export const AllBrands: Story = {
  args: {
    items: [
      ...social,
      { id: "instagram", href: "https://instagram.com", label: "Instagram" },
      { id: "x", href: "https://x.com", label: "X" },
    ] as unknown as SocialOrbItems,
    height: 240,
  },
};

/**
 * Área estrecha: las esferas se encogen solas hasta que caben, y si no
 * entran de ancho se reparten en filas. Es lo que pasa en un móvil.
 */
export const Narrow: Story = {
  args: { width: 240, height: 150 },
};

/** Canicas: casi sin rozamiento y con mucho rebote, se pasan un buen rato. */
export const Bouncy: Story = {
  args: { friction: 0.99, bounce: 0.9 },
};

/** Barro: se frenan en cuanto se sueltan, sin rebote. Para probar el toque. */
export const Heavy: Story = {
  args: { friction: 0.82, bounce: 0.1, hint: null },
};
