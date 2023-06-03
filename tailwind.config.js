/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      colors: {
        secondary: "#aaa6c3",
      },
      width: {
        '50':'50px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '300': '300px',
        '400': '400px'
      },
      height: {
        '50':'50px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        '300': '300px',
        '400': '400px'
      },
      animation: {
        "slide-in-top": "slide-in-top 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s forwards",
        "slide-in-bottom": "slide-in-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both"
      },
      keyframes: {
          "slide-in-top": {
              "0%": {
                  transform: "translateY(-1000px)",
                  opacity: "0"
              },
              to: {
                  transform: "translateY(0)",
                  opacity: "1"
              }
          },
          "slide-in-bottom": {
            "0%": {
                transform: "translateY(200px)",
                opacity: "0"
            },
            to: {
                transform: "translateY(0)",
                opacity: "1"
            }
        }
      }
    }
  },
  plugins: [],
}