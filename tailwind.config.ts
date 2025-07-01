import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dark: "#000000",
        surface: "#0D0D0D",
        light: "#FFFFFF",
        strike: "#FF3B3B",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        full: "9999px",
      },
      boxShadow: {
        neon: "0 0 24px rgba(11,92,249,0.7)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        glitch: {
          "0%, 100%": { clipPath: "inset(0 0 0 0)" },
          "50%": { clipPath: "inset(30% 0 40% 0)" },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 0 rgba(11,92,249,0.4)" },
          "70%": { boxShadow: "0 0 24px rgba(11,92,249,0.9)" },
          "100%": { boxShadow: "0 0 0 rgba(11,92,249,0.4)" },
        },
      },
      animation: {
        glitch: "glitch 1s infinite both",
        pulse: "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
