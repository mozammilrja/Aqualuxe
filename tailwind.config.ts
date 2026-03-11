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
        // Map CSS variables to Tailwind
        // Edit colors in globals.css :root section
        background: "var(--color-bg)",
        elevated: "var(--color-bg-elevated)",
        muted: "var(--color-bg-muted)",
        
        accent: {
          DEFAULT: "var(--color-accent)",
          secondary: "var(--color-accent-secondary)",
          dark: "var(--color-accent-dark)",
        },
        
        cta: {
          DEFAULT: "var(--color-cta)",
          secondary: "var(--color-cta-secondary)",
          dark: "var(--color-cta-dark)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
