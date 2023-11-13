/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'carousel-item-1': "url('../build/images/item1 carousel.jpg')",
        'carousel-item-2': "url('../build/images/item2 carousel.jpg')",
        'carousel-item-3': "url('../build/images/item3 carousel.jpg')",
      },
    },
  },
  plugins: [],
};
