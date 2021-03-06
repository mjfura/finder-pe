
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        ldsroller:{
          '0%':{ transform: 'rotate(0deg)' },
          '100%':{ transform: 'rotate(360deg)' }
        }
      },
      fontFamily:{
        "sans":["Montserrat","sans-serif"],
      },
    },
  },
  plugins: [],
}
