const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: colors.lime
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
