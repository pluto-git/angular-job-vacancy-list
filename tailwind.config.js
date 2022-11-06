/** @type {import('tailwindcss').Config} */
// could have create palettes from nothing for this project
//instead will use tailwindClass-[color/option] directly in components
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {}
},
  plugins: [],
}