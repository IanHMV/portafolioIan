import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
  ],
  /* Mismo bundler que el sitio: las stories se compilan como los
     componentes reales, así que `next/link`, `next/image` y las
     directivas "use client" funcionan sin adaptadores. */
  framework: "@storybook/nextjs",
  staticDirs: ["../public"],
};

export default config;