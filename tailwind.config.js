/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'latoNav': ["Lato", "sans-serif"],
        'oswaldHd': ["Oswald", "sans-serif"],
        'playfair': ["Playfair Display", "serif"],
        'merri': ["Merriweather","serif"],
        'nav': ["PT Sans Narrow", "sans-serif"],
      },
  
    },
  },
  plugins: [],
}


