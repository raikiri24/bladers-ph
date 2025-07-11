import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ethnocentric: ["Ethnocentric", "sans-serif"],
        priscav: ["PresicavW00Heavy", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
