/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url(/home.png)",
        "home-mobile": "url(/home_mobile.png)",
        "about-mobile": "url(/img-about.png)",
        "menu": "url(/bg-cardapio.png)",
      }
    },
  },
  plugins: [],
}