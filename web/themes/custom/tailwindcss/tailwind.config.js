/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.{html,js,twig}',
    './templates/**/*.{html,js,twig}',
    './components/**/*.{html,js,twig}'
  ],
  
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  prefix: ''
}