import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        // Token-driven (resolve to CSS vars for theme switching)
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-elev": "rgb(var(--bg-elev) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted))",
        "fg-subtle": "rgb(var(--fg-subtle))",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
        default: "rgb(var(--border))",

        // ============== CORPORATE B2B PALETTE ==============
        // Brand inks — slate negros con undertone frío (terminales / fintech).
        ink: {
          950: "#06080C", // deepest — hero overlays
          900: "#0B0E14", // page bg dark mode
          800: "#11151D", // section alt dark
          700: "#181D27", // surface elev dark
          600: "#232932", // strong dark surface
          500: "#3B4452", // body text on dark surfaces
        },
        // Cream / off-whites — warm pero MUY discretos.
        cream: {
          50: "#FAFBFC",
          100: "#F4F6F8",
          200: "#ECEFF3",
        },
        // Neutral scale — la columna vertebral del look corporate (slate cool).
        neutral: {
          0:    "#FFFFFF",
          50:   "#FAFBFC",
          100:  "#F4F6F8",
          150:  "#ECEFF3",
          200:  "#E1E5EC",
          300:  "#C9CFD9",
          400:  "#9AA3B2",
          500:  "#6F7886",
          600:  "#525C6B",
          700:  "#3B4452",
          800:  "#232932",
          900:  "#141821",
          950:  "#0B0E14",
          1000: "#06080C",
        },
        // Primary — Slate Indigo. Reemplaza al "azul Stripe imitación".
        primary: {
          DEFAULT: "#243352",
          50:  "#F2F4F9",
          100: "#E3E7F1",
          200: "#C2CADD",
          300: "#94A2C0",
          400: "#6478A0",
          500: "#45587E",
          600: "#2F4262",
          700: "#243352",
          800: "#182542",
          900: "#0F1A33",
          950: "#07101F",
        },
        // Estados — terrosos / desaturados (estilo dashboards financieros).
        success: {
          DEFAULT: "#14764B",
          soft:    "#E6F1EC",
        },
        warning: {
          DEFAULT: "#A6781E",
          soft:    "#FBF2DE",
        },
        danger: {
          DEFAULT: "#A53A3A",
          soft:    "#F5E2E2",
        },
        // ============== LEGACY ALIASES (re-skinned, no neon) ==============
        // Conservamos los nombres `cyan` y `violet` para no romper componentes,
        // pero ahora son tonos slate sobrios. Cuando se usan a /20 opacity
        // (fondos decorativos), generan washes premium en lugar de neón.
        cyan: {
          DEFAULT: "#5874AC", // muted steel blue (era #00E5C7 neon)
          50:  "#EEF2F8",
          100: "#D9E1ED",
          200: "#B7C4D9",
          300: "#94A6C4",
          400: "#7388B0",
          500: "#5874AC",
          600: "#445E91",
          700: "#344A75",
          800: "#243557",
          900: "#15213A",
        },
        violet: {
          DEFAULT: "#3B4A6B", // deep slate navy (era #8B5CF6 neon)
          50:  "#EFF1F5",
          100: "#DDE1EA",
          200: "#BBC2D2",
          300: "#98A3BA",
          400: "#7684A2",
          500: "#3B4A6B",
          600: "#303C58",
          700: "#252F46",
          800: "#1A2233",
          900: "#0F1521",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5)), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 .5H40' stroke='%23ffffff08'/%3E%3Cpath d='M.5 0V40' stroke='%23ffffff08'/%3E%3C/svg%3E\")",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "infinity-flow": "infinity-flow 12s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        "infinity-flow": {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-200" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
