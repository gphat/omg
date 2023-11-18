const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/*.html",
    "./_includes/*.html",
    "./posts/*.markdown",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

