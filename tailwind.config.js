const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./public/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}