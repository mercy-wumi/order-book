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
    },
    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xxl': '1090px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}