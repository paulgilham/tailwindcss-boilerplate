/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.{html,js,twig}',
    './templates/**/*.{html,js,twig}',
    './src/twig/*.{html,js,twig}',
    './src/twig/**/*.{html,js,twig}'
  ],
  
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  prefix: ''
}