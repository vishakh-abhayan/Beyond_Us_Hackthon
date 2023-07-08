/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: {
          100: "#9747ff",
          200: "rgba(151, 71, 255, 0.5)",
        },
        gray: {
          100: "#86868c",
          200: "rgba(255, 255, 255, 0)",
          300: "rgba(0, 0, 0, 0)",
        },
        black: "#000",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      lgi: "19px",
      "29xl": "48px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
