/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#10016a',
      primaryblue: '#2c3e50',
      lightblue: "#10016a1a",
      iconlightblue: '#becbdd',
      iblue: "#5ab3f2",
      red: "#99245e",
      lightred: "#fdf2f2",
      darkred: "#771d1d",
      errorred: '#f56565',
      black: '#040404',
      lightblack: '#374151',
      white: '#fff',
      darkgray: "#7c7c7c",
      primarygray: "#f2f2f2",
      secondarygray: "#f7f7f7",
      mediumgray: "#dadada",
      lightgray: '#fafafa',
      gray: '#f0f0f0',
      igray: '#d1d5d5',
      brown: '#b19662',
      lightwhite: '#ffffffb3',
      secondarybrown: "#c9c0b1",
      green: '#67daa0',
      lightgreen: '#f3faf7',
      darkgreen: '#03543f',
      yellow: '#b19662'
    },
    boxShadow: {
      grayshadow: '0 0 40px 0 rgba(54,54,54,0)'
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        radikal: ["Radikal", "sans-serif"],
        radikal_thin: ["Radikal Thin", "sans-serif"],
        radikal_light: ["Radikal Light", "sans-serif"],
        radikal_medium: ["Radikal Medium", "sans-serif"],
      },
      screens: {
        ios : '320px',
        samsungS8: "360px",
        xs: '390px',
        sm: "640px",
        md: "768px",
        "2md": "820px",
        "3md": "960px",
        lg: "1024px",
        "2lg": "1080px",
        "3lg": "1180px",
        xl: "1280px",
        "2xl":'1468px',
      },
      boxShadow: {
        'tip_shadow': "0 10px 30px 0 rgba(0, 0, 0, 0.05)"
      }
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
