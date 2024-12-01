const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(139, 92, 246)", // Main purple color
          light: "rgb(179, 124, 254)", // Lighter purple shade
          lighter: "rgb(200, 141, 253)", // Even lighter purple shade
          dark: "rgb(109, 40, 217)", // Darker purple shade
          darker: "rgb(91, 35, 174)", // Even darker purple shade
        },
      },
    },
  },
  plugins: [],
};
