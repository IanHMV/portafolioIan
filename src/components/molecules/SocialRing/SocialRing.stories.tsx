import type { Meta, StoryObj } from "@storybook/react-vite";

import { SocialRing } from "./SocialRing";
import type { SocialRingItems } from "./SocialRing.types";

const social: SocialRingItems = [
  { id: "gmail", href: "mailto:ianhmv418@gmail.com", label: "Gmail" },
  { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
  { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
];

const meta: Meta<typeof SocialRing> = {
  title: "Molecules/SocialRing",
  component: SocialRing,
  parameters: {
    layout: "centered",
  },
  args: {
    items: social,
  },
  argTypes: {
    size: { control: { type: "range", min: 180, max: 520, step: 10 } },
    badgeSize: { control: { type: "range", min: 36, max: 120, step: 2 } },
    minBadges: { control: { type: "range", min: 1, max: 24, step: 1 } },
    startAngle: { control: { type: "range", min: 0, max: 360, step: 1 } },
    spinDuration: { control: { type: "range", min: 0, max: 120, step: 1 } },
  },
} satisfies Meta<typeof SocialRing>;

export default meta;

type Story = StoryObj<typeof SocialRing>;

export const Default: Story = {};

/** Las tres redes sin repetir: una insignia cada 120°. */
export const NoRepeat: Story = {
  args: { minBadges: 1, size: 260 },
};

/** Anillo denso y quieto, para revisar la retícula sin perseguir iconos. */
export const Still: Story = {
  args: { minBadges: 15, spinDuration: 0 },
};

/** Las cinco marcas del catálogo (socialRing.config.ts). */
export const AllBrands: Story = {
  args: {
    items: [
      ...social,
      { id: "instagram", href: "https://instagram.com", label: "Instagram" },
      { id: "x", href: "https://x.com", label: "X" },
    ] as unknown as SocialRingItems,
    minBadges: 10,
  },
};
