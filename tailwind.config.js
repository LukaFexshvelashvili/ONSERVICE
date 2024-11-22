/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2196F3",
        mainClear: "rgba(33, 149, 243, 0.1)",
        mainClearHover: "rgba(33, 149, 243, 0.15)",
        mainHover: "#339bf0",
        secondMain: "#40A9FD",
        bodyBg: "#F8F8F8",
        bg: "#FFFFFF",
        black: "#494949",
        black2: "#6e6e6e",
        inputBg: "#F8F8F8",
        desc: "rgba(73, 73, 73, 0.6)",
        white: "#FFFFFF",
        whiteHover: "#fcfcfc",
        whiteBg: "rgba(255, 255, 255, 0.20)",
        whiteBgHover: "rgba(255, 255, 255, 0.30)",
        whiteBgActive: "rgba(255, 255, 255, 0.40)",
        green: "#34D675",
        yellow: "#FFCE1F",
        red: "#F72585",
        lineDecor: "#F4F4F4",
      },
      boxShadow: {
        def: "0px 4px 30px rgba(0, 0, 0, 0.02)",
      },
      fontFamily: {
        regular: "regular",
        medium: "medium",
        bold: "bold",
        capsMedium: "capsMedium",
        bpg: "bpg",
        bpgcaps: "bpgcaps",
      },
      borderRadius: {
        info: "15px",
        cards: "20px",
      },
    },
  },
  plugins: [],
};
