import type { Meta, StoryObj } from "@storybook/react-vite";

import { SocialDial, type SocialDialItems } from "./SocialDial";

const items: SocialDialItems = [
  { id: "gmail", href: "mailto:ianvazquez418@gmail.com", label: "Gmail" },
  { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
  { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
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
    startAngle: { control: { type: "range", min: -180, max: 180, step: 5 } },
    thickness: { control: { type: "range", min: 4, max: 40, step: 1 } },
    rise: { control: { type: "range", min: 0, max: 80, step: 2 } },
    push: { control: { type: "range", min: 0, max: 60, step: 2 } },
    iconRadius: { control: { type: "range", min: 0, max: 1, step: 0.02 } },
  },
  args: { items },
} satisfies Meta<typeof SocialDial>;

export default meta;

type Story = StoryObj<typeof meta>;

/** 3 redes = 3 porciones de 120°. */
export const Default: Story = {};

/** El disco se reparte solo: 4 redes = 4 cuartos. */
export const CuatroRedes: Story = {
  args: {
    items: [
      ...items,
      { id: "x", href: "https://x.com/ianvazquez", label: "X" },
    ] as SocialDialItems,
  },
};

/** 5 redes = 5 porciones de 72°. */
export const CincoRedes: Story = {
  args: {
    items: [
      ...items,
      { id: "x", href: "https://x.com/ianvazquez", label: "X" },
      { id: "instagram", href: "https://instagram.com/ianvazquez", label: "Instagram" },
    ] as SocialDialItems,
  },
};

/** Caso límite: una sola red ocupa el disco entero, sin cortes ni separación. */
export const UnaRed: Story = {
  args: { items: [items[0]] },
};

/** `startAngle` rota el reparto sin mover el disco. */
export const RepartoRotado: Story = {
  args: { startAngle: -45 },
};

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
