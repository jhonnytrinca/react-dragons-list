/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
