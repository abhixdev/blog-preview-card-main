/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
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
