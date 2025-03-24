/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        primary : ["Montserrat", "sans-serif"],
        // Add more custom font families as needed
      },
      colors:{
        primary: '#FC3314',
        secoundary:'#FFD4D0'
      }
    }
  },
  plugins: [],
}

