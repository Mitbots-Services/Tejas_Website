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
        'soft-gold': '#F4D03F',
        'champagne-light': '#FAF3EE'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        luxury: '0 10px 40px rgba(0, 0, 0, 0.08)',
        'gold-lg': '0 20px 60px rgba(244, 208, 63, 0.3)'
      }
    }
  },
  plugins: []
};
