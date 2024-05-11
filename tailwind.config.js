/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-tone': 'var(--color-black-tone)',
      },
      zIndex: {
        '1': '1',
      }
    },
  },
  plugins: [],
}

