/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f7f7f7",
        secondary: "#eaeaea",
        third: 'rgba(234,218,226,0.9)',
        textColor: '#d8d8d8',
        dark: '#212025',
        lightPurple: '#95dfde',
        purple: '#8424de',
        info: '#868686',
        tertiary: "#adb5bd",
        gray: '#a8a8a8',
        red: '#9d6673',
        pink: 'pink',
        navColor: '#161617cc',

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
