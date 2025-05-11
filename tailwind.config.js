/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'blob': 'blob 8s infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards'
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%,100%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateX(50px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.pause-animation': {
          'animation-play-state': 'paused',
        },
      });
    }),
  ],
};