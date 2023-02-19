/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: {
        1: "transparent",
        2: "rgba(0, 0, 0, 0.2)",
      },
      brown: {
        1: "#8B7C6E",
        2: "#6F6357",
        3: "#D9BDAB",
        4: "#F2E9E4",
      },
    },
  },
  plugins: [],
};
