const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    fontFamily: {
      base: ["Inter", "sans-serif"],
      title: ["IBM Plex Sans", "Inter", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
