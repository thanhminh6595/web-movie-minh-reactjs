/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        default: "1px",
      },
      height: {
        "30%": "30vh",
        "40%": "40vh",
        "50%": "50vh",
        "60%": "60vh",
      },
      fontFamily: {
        nunito: "nunito, san-serif",
      },
      translate: {},
    },
  },
  plugins: [],
};
