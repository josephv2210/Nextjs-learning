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
        'primary': '#13111a',
        'secondary': '#e4e1f6',
        'border-color': '#302c3f',
        'text-color': '#fff',
        'main-contrast': '#ff4980',
        'background': "var(--background)",
        'foreground': "var(--foreground)",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(270deg, #4f56ff, #ff4980)',
      }
    },
  },
  plugins: [],
};
export default config;
