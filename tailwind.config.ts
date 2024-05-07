import { Pixelify_Sans } from "next/font/google";
import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/comman/custom.css",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Pixelify_Sans: ['Pixelify Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  
  plugins: [],
};
export default config;
