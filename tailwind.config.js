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
      },
      extend: {
        keyframes: {
          'fade-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          },
        },
        animation: {
          'fade-up': 'fade-up 0.3s ease-out'
        },
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