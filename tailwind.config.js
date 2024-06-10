/** @type {import('tailwindcss').Config} */
const TailwindColorSchemea = require("./src/assets/styles/TailwindColorsSchema");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: TailwindColorSchemea,
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
