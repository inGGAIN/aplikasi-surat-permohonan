/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/App.tsx'],
  theme: {
    placeholderColor: theme => theme('colors'),
    placeholderColor: {
      primary: '#3490dc'(rgb),
      secondary: '#ffed4a'(rgb),
      danger: '#e3342f'(rgb),
    },
    // extend: {},
  },
  plugins: [],
};
