/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
   plugins: [
    plugin(function({ addVariant }) {
      addVariant('dark', '.dark &');
    }),
  // plugins: [],
  ]
}
