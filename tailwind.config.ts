import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F5F1",
        foreground: "#303330",

        sage: {
          DEFAULT: "#718278",
          dark: "#34423C",
          light: "#DDE3DF",
        },

        beige: {
          DEFAULT: "#C8B9A8",
          light: "#E9E2D9",
        },

        muted: "#6B6F6B",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],

        display: [
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
      },

      maxWidth: {
        content: "1280px",
      },

      spacing: {
        section: "7.5rem",
      },

      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [],
} satisfies Config;