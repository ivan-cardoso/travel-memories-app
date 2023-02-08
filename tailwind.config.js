/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '560px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1900px',
      },
      'colors': {
        'light': '#fff8fa'
      },
      spacing: {
        'container': '6rem',
      },
      fontFamily: {
        'heading': "'Inter', sans-serif;",
        'body': "'Poppins', sans-serif;",
      },
      boxShadow: {
        '3xl': '0 5px 50px -12px rgba(0, 0, 0, 0.3)',
        'variantShadow' : '0 -4px 12px 1px rgb(0 0 0 / 25%)'
      }
    },
  },
  plugins: [],
}