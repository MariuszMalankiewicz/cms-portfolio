/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'blue': '#407BFF',
        'light-blue': '#AED0FF',
        'dark-gray': '#B1B1B1',
        'light-gray': '#E6E6E6',
        
      },
    },
  },
  plugins: [],
};
