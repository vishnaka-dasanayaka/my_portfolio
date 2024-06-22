/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        bg_gray_left: '#F9F8EE',
        bg_gray_right: '#F8F7F1',
      }
    },
  },
  plugins: [],
}

