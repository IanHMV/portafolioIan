
import type { Config } from 'tailwindcss'

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend:{
      colors:{
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        brand: "var(--color-brand)",
        "card-bg": "var(--color-card-bg)",
        border: "var(--color-border)",
      }
    }
  }

} satisfies Config