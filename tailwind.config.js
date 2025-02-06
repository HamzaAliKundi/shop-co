/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'integral': ['Integral CF', 'sans-serif'],
      },
    },
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
};
