import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        "dark-blue-bg": "#192026",
        "dark-grey-bg": "#1d262d",
        "grey-bg": "#2a3742",
        "light-grey-bg": "#374957",
        purple: "#9e46fd",
        pink: "#ff5eff",
        cyan: "#61eef8",
        blue: "#43aeff",
      },
    },
  },
  plugins: [],
};
export default config;
