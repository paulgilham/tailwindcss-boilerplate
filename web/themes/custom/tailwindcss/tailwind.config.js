/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './templates/*.{html,js,twig}',
    './templates/**/*.{html,js,twig}',
    './partials/**/*.{html,js,twig}',
    './partials/**/*.{html,js,twig}',
    './src/twig/*.{html,js,twig}',
    './src/twig/**/*.{html,js,twig}'
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
  prefix: ''
}