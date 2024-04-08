/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cs-white": '#FFF7FC',
        "cs-lightBlue": '#8B93FF',
        "cs-Blue": '#5755FE',
        "cs-pink": '#FF71CD'
      },
      
      fontFamily:{
        "PatrickHand": '"Patrick Hand", cursive',
      }
    },
  },
  plugins: [],
}