/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        mBg: '#00040F'
      },
      fontFamily: {
        pop: 'Poppins',
      },

    },
  },
  plugins: [],
}

