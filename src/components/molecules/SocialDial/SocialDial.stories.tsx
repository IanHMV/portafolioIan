import type { Meta, StoryObj } from "@storybook/react-vite";

import { SocialDial, type SocialDialItems } from "./SocialDial";

const items: SocialDialItems = [
  { id: "github", href: "https://github.com/IanVazquez418", label: "GitHub" },
  { id: "linkedin", href: "https://linkedin.com/in/ianvazquez", label: "LinkedIn" },
  { id: "x", href: "https://x.com/ianvazquez", label: "X" },
  { id: "instagram", href: "https://instagram.com/ianvazquez", label: "Instagram" },
];

const meta = {
  title: "Molecules/SocialDial",
  component: SocialDial,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#1F2127" },
        { name: "light", value: "#F4F5F7" },
      ],
    },
  },
  argTypes: {
    size: { control: { type: "range", min: 160, max: 420, step: 10 } },
    tilt: { control: { type: "range", min: 0, max: 70, step: 1 } },
    spin: { control: { type: "range", min: 0, max: 90, step: 1 } },
    thickness: { control: { type: "range", min: 4, max: 40, step: 1 } },
    rise: { control: { type: "range", min: 0, max: 80, step: 2 } },
    push: { control: { type: "range", min: 0, max: 60, step: 2 } },
  },
  args: { items },
} satisfies Meta<typeof SocialDial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Sin rotación en Z: los cortes quedan alineados a los ejes de la elipse. */
export const SinGiro: Story = {
  args: { spin: 0 },
};

/** Casi frontal: la profundidad solo aparece al hacer hover. */
export const CasiFrontal: Story = {
  args: { tilt: 14, thickness: 22 },
};

/** Grueso y con salto alto: la porción se despega mucho más del pastel. */
export const Exagerado: Story = {
  args: { thickness: 30, rise: 64, push: 34 },
};

/** Estático, útil para snapshots visuales. */
export const SinFlotar: Story = {
  args: { floating: false },
};

export const Pequeno: Story = {
  args: { size: 180, thickness: 12, rise: 26, push: 14 },
};
