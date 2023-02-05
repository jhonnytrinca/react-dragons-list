/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { 'margin-left': '0rem' },
          '25%': { 'margin-left': '0.5rem' },
          '50%': { 'margin-left': '-0.5rem' },
          '75%': { 'margin-left': '0rem' }
        },
        titleAnimation: {
          '0%': { transform: 'translateX(0%)', left: '0' },
          '25%': { transform: 'translateX(0%)', left: '0' },
          '75%': { transform: 'translateX(-100%)', left: '100%' },
          '100%': { transform: 'translateX(-100%)', left: '100%' }
        }
      },
      animation: {
        'title-animation': '3s linear 0s infinite alternate titleAnimation',
        'spin-loading': 'spin 2.5s linear infinite'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
