import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主题色全部走 CSS 变量（亮/暗在 globals.css 定义）
        bg: "var(--bg)",
        card: "var(--card-bg)",
        line: "var(--card-border)",
        fg: "var(--foreground)",
        muted: "var(--foreground-muted)",
      },
      fontFamily: {
        sans: [
          "var(--font-inter-tight)",
          "Inter Tight",
          "Helvetica Neue",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        pill: "8px",
        card: "14px",
      },
      maxWidth: {
        content: "680px",
      },
      boxShadow: {
        soft: "0 2px 12px #00000014",
        lift: "0 4px 24px #00000014",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
