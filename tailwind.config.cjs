/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      inherit: 'inherit',
      black: '#000000',
      white: '#ffffff',
      lightGray: '#F4F4F6',
      grayText: '#778CA2',
      backgroundColor: '#F8FAFB',
      activeColor: '#D71E0E',
      searchBg: '#F8FAFB',
      borderSearch: '#D6D6D6',
      buyColor: '#52965E',
    }
  },
  plugins: [],
}