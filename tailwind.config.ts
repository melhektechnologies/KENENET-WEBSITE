import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: "var(--color-paper)",
        mist: "var(--color-mist)",
        ink: {
          DEFAULT: "var(--color-ink)",
          600: "var(--color-ink-600)",
          400: "var(--color-ink-400)",
        },
        purple: {
          DEFAULT: "var(--color-purple)",
          100: "var(--color-purple-100)",
          700: "var(--color-purple-700)",
          900: "var(--color-purple-900)",
        },
        orange: {
          DEFAULT: "var(--color-orange)",
          600: "var(--color-orange-600)",
        },
        line: "var(--color-line)",
        "on-dark-muted": "var(--color-on-dark-muted)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", '"Times New Roman"', "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
      maxWidth: {
        container: "1240px",
        page: "1336px",
        narrow: "760px",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        emphasis: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

