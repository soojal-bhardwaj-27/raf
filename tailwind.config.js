/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A2463',
        secondary: '#3E92CC',
        accent: '#E6AF2E',
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F',
      }
    },
  },
  plugins: [],
};