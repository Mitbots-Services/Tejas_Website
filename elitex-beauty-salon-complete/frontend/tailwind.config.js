/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'soft-grey': '#B2BABC',
        'misty-blue': '#BDCDE6',
        'charcoal': '#2C2B30',
        'porcelain': '#FAF3EE',
        'champagne-light': '#FAF3EE',
        'pink-gradient-start': '#B2BABC',
        'pink-gradient-end': '#2C2B30',
        'gold-start': '#BDCDE6',
        'gold-middle': '#B2BABC',
        'gold-end': '#FAF3EE'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        cursive: ['Pacifico', 'cursive'] // Added Pacifico for girly header
      },
      boxShadow: {
        luxury: '0 10px 40px rgba(0, 0, 0, 0.08)',
        'gold-lg': '0 20px 60px rgba(244, 208, 63, 0.3)'
      }
    }
  },
  plugins: []
};
