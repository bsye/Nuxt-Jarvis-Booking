import { currentPlatformColors } from "./utils/platform";
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        platform: currentPlatformColors,
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
};