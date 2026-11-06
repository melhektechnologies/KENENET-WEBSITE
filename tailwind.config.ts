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
        paper:           "rgb(var(--rgb-paper) / <alpha-value>)",
        mist:            "rgb(var(--rgb-mist) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--rgb-ink) / <alpha-value>)",
          600:     "rgb(var(--rgb-ink-600) / <alpha-value>)",
          400:     "rgb(var(--rgb-ink-400) / <alpha-value>)",
        },
        purple: {
          DEFAULT: "rgb(var(--rgb-purple) / <alpha-value>)",
          100:     "rgb(var(--rgb-purple-100) / <alpha-value>)",
          700:     "rgb(var(--rgb-purple-700) / <alpha-value>)",
          900:     "rgb(var(--rgb-purple-900) / <alpha-value>)",
        },
        orange: {
          DEFAULT: "rgb(var(--rgb-orange) / <alpha-value>)",
          600:     "rgb(var(--rgb-orange-600) / <alpha-value>)",
        },
        line:            "rgb(var(--rgb-line) / <alpha-value>)",
        "on-dark-muted": "rgb(var(--rgb-on-dark-muted) / <alpha-value>)",
        success:         "rgb(var(--rgb-success) / <alpha-value>)",
        error:           "rgb(var(--rgb-error) / <alpha-value>)",
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

      /* ── Elevation (purple-tinted, never pure black) ───── */
      boxShadow: {
        cta:
          "inset 0 1px 0 rgba(255,255,255,0.38), 0 1px 2px rgba(43,18,54,0.22), 0 10px 22px -8px rgba(249,162,27,0.55)",
        "cta-hover":
          "inset 0 1px 0 rgba(255,255,255,0.45), 0 2px 4px rgba(43,18,54,0.22), 0 16px 30px -8px rgba(249,162,27,0.65)",
        brand:
          "inset 0 1px 0 rgba(255,255,255,0.14), 0 1px 2px rgba(43,18,54,0.25), 0 10px 22px -10px rgba(127,50,147,0.60)",
        "brand-hover":
          "inset 0 1px 0 rgba(255,255,255,0.18), 0 2px 4px rgba(43,18,54,0.25), 0 16px 30px -10px rgba(127,50,147,0.70)",
        panel:
          "inset 0 1px 0 rgba(255,255,255,0.90), 0 2px 6px rgba(43,18,54,0.05), 0 28px 56px -28px rgba(43,18,54,0.30)",
        lift:
          "inset 0 1px 0 rgba(255,255,255,0.80), 0 14px 34px -18px rgba(43,18,54,0.28)",
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
