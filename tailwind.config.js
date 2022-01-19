const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'custom-light': '#F8F8FB',
        'custom-dark': '#141625',
        'custom-purple-1': '#DFE3FA',
        'custom-purple-2': '#7E88C3',
        'custom-purple-3': '#9277FF',
        'custom-purple-4': '#7C5DFA',
        'custom-gray-1': '#888EB0',
        'custom-gray-2': '#252945',
        'custom-gray-3': '#1E2139',
        'custom-gray-4': '#0C0E16',
        'custom-red-1': '#9277FF',
        'custom-red-2': '#EC5757'
      },
    }
  },
  plugins: []
};
