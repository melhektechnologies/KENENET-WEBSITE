import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── Brand colours ──────────────────────────────────── */
      colors: {
        background:      "var(--background)",
        foreground:      "var(--foreground)",
        paper:           "var(--color-paper)",
        mist:            "var(--color-mist)",
        ink: {
          DEFAULT: "var(--color-ink)",
          600:     "var(--color-ink-600)",
          400:     "var(--color-ink-400)",
        },
        purple: {
          DEFAULT: "var(--color-purple)",
          100:     "var(--color-purple-100)",
          700:     "var(--color-purple-700)",
          900:     "var(--color-purple-900)",
        },
        orange: {
          DEFAULT: "var(--color-orange)",
          600:     "var(--color-orange-600)",
        },
        line:           "var(--color-line)",
        "on-dark-muted":"var(--color-on-dark-muted)",
        success:        "var(--color-success)",
        error:          "var(--color-error)",
      },

      /* ── Typography ─────────────────────────────────────── */
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", '"Times New Roman"', "serif"],
        sans:  ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },

      /* ── Layout ─────────────────────────────────────────── */
      borderRadius: { DEFAULT: "0.25rem" },
      maxWidth: {
        container: "1240px",
        page:      "1336px",
        narrow:    "760px",
      },

      /* ── Motion ─────────────────────────────────────────── */
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        emphasis: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        heroFadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.65" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      animation: {
        "hero-1":    "heroFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0s both",
        "hero-2":    "heroFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.09s both",
        "hero-3":    "heroFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.18s both",
        "hero-4":    "heroFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.27s both",
        "pulse-slow":"pulseSlow 2.5s ease-in-out infinite",
        "fade-in":   "fadeIn 0.8s ease-out forwards",
        shimmer:     "shimmer 1.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
