/** @type {import('tailwindcss').Config} */
//https://fe-developers.kakaoent.com/2022/220303-tailwind-tips/

module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
