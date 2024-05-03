/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      Figtree: ["Figtree", "sans-serif"],
      FigtreeExtraBold: ["Figtree-ExtraBold", "sans-serif"],
      FigtreeSemiBold: ["Figtree-SemiBold", "sans-serif"],
    },
    extend: {
      colors: {
        yellow: "#f4d04e",
        gray: "#808080",
        black: "#121212",
      },
    },
  },
  plugins: [],
};
