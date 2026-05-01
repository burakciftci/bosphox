import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          /** Logo tonları: buz mavisi / cyan üzerinde paneller */
          DEFAULT: "transparent",
          band: "rgba(240, 249, 255, 0.82)",
          elevated: "#ffffff",
          muted: "#f0f9ff",
          highlight: "rgba(255, 255, 255, 0.92)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)",
          muted: "rgb(var(--ink-muted-rgb) / <alpha-value>)",
          faint: "rgb(var(--ink-faint-rgb) / <alpha-value>)",
        },
        accent: {
          /** Daha doygun elektrik cyan — ikon / vurgu */
          DEFAULT: "#00e8ff",
          /** Daha canlı royal — soluk çelik mavisi değil */
          soft: "#0a7cff",
          dim: "rgba(0, 232, 255, 0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.03em",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(160, 220, 255, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(160, 220, 255, 0.12) 1px, transparent 1px)",
        "radial-soft":
          "radial-gradient(ellipse 95% 58% at 50% -20%, rgba(255, 255, 255, 0.14), transparent 48%), radial-gradient(ellipse 85% 58% at 50% -15%, rgba(64, 200, 255, 0.22), transparent 50%), radial-gradient(ellipse 80% 55% at 65% 100%, rgba(100, 190, 255, 0.18), transparent 55%)",
        "hero-light":
          "radial-gradient(ellipse 110% 85% at 40% -15%, rgba(255, 255, 255, 0.2), transparent 45%), radial-gradient(ellipse 90% 75% at 50% -10%, rgba(56, 190, 255, 0.24), transparent 48%), radial-gradient(ellipse 70% 65% at 95% 12%, rgba(130, 200, 255, 0.2), transparent 48%)",
        "hero-depth":
          "radial-gradient(ellipse 65% 52% at 88% 98%, rgba(2, 12, 24, 0.42), transparent 50%)",
        "accent-fade-h":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.7), rgba(186, 230, 253, 0.55), rgba(14, 165, 233, 0.5), rgba(34, 211, 238, 0.35), rgba(0, 212, 245, 0))",
        /** CTA butonları — royal → cyan (kartlardan ayrı) */
        "card-brand":
          "linear-gradient(90deg, #007bff 0%, #0095ff 42%, #00c8ff 78%, #00e5ff 100%)",
        /** İlk section kartları: beyaza yakın ama belirgin buz-turkuaz (daha az “plastik beyaz”) */
        "card-tone-1":
          "linear-gradient(162deg, #f4fbfe 0%, #eaf6fc 24%, #ddf1fa 50%, #d0ebf8 76%, #c5e6f6 100%)",
        "card-tone-2":
          "linear-gradient(165deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 48%, #cffafe 76%, #a5f3fc 100%)",
        "card-tone-3":
          "linear-gradient(170deg, #f0f9ff 0%, #dbeafe 30%, #bae6fd 58%, #7dd3fc 82%, #38bdf8 100%)",
        /** Dark mode kart yüzeyleri */
        "card-dark-1":
          "linear-gradient(162deg, rgb(15 23 42 / 0.96) 0%, rgb(17 38 58 / 0.92) 50%, rgb(12 26 44 / 0.94) 100%)",
        "card-dark-2":
          "linear-gradient(165deg, rgb(15 23 42 / 0.95) 0%, rgb(16 42 62 / 0.9) 48%, rgb(12 28 48 / 0.93) 100%)",
        "card-dark-3":
          "linear-gradient(170deg, rgb(12 22 40 / 0.96) 0%, rgb(15 38 58 / 0.92) 55%, rgb(10 28 48 / 0.94) 100%)",
      },
      boxShadow: {
        glow: "0 0 56px -8px rgba(56, 190, 255, 0.38), 0 0 40px -6px rgba(255, 255, 255, 0.14)",
        card: "0 1px 0 rgba(255,255,255,0.95) inset, 0 12px 40px -16px rgba(14, 165, 233, 0.12)",
        device:
          "0 2px 0 rgba(255,255,255,0.15) inset, 0 28px 56px -24px rgba(8, 20, 40, 0.32), 0 0 0 1px rgba(80, 180, 255, 0.16), 0 0 40px -12px rgba(40, 170, 255, 0.16)",
        "device-sm":
          "0 1px 0 rgba(255,255,255,0.12) inset, 0 20px 44px -20px rgba(4, 20, 30, 0.3)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "kicker-line": "kickerLinePulse 2.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        kickerLinePulse: {
          "0%, 100%": { opacity: "0.72" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
