/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#090B11",
          200: "#0000",
        },
        blue: {
          100: "#2C9BF6", //button
          200:"#16171D" //button text
        },
        white:{
          primary:"#fff",
          secondary:"#787A8D",
        }
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
      },
    },
  },
  plugins: [],
}
