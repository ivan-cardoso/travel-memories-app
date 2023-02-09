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
        'primary_orange': "#ff7756",
        'light': '#edf1fb',
        'primary_blue': "#3a5adf",
        'dark_blue': "#001438",
        'variant_blue': "#162c4c",
        // 5e14d6 - PURPLE
      },
      spacing: {
        'container': '6rem',
      },
      fontFamily: {
        'title': "'Inter', sans-serif;",
        'body': "'Poppins', sans-serif;",
        'heading': "'Montserrat', sans-serif;",
      },
      boxShadow: {
        '3xl': '0 5px 50px -12px rgba(0, 0, 0, 0.3)',
        'variantShadow': '0 -4px 12px 1px rgb(0 0 0 / 25%)'
      },
      backgroundImage: {
        'hero_mobile': "url('../src/images/hero/hero1.jpg')",
      }
    },
    plugins: [],
  }
}

/* 
  COLORS
    ORANGE - ff7756
    LIGHT - edf1fb
    PRIMARY BLUE - 3a5adf
    DARK BLUE - 001438
    VARIANT BLUE - 162c4c
 
 */

    