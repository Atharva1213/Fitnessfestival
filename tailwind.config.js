/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily : {
      quoteText : ['Courgette', 'cursive'],
      headingText : ['Carter One', 'cursive'],
      aboutFont : ['Kaushan Script', 'cursive'],
      bannerfont: ['Roboto Condensed', 'sans-serif'],
      bannerFont2 : ['Bree Serif', 'serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}