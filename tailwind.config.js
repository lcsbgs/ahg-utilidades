/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          900: '#1a365d', // Cor principal
          800: '#2a4365',
          700: '#2c5282',
          600: '#3182ce',
          200: '#bee3f8',
        },
        'green': {
          500: '#38a169', // Cor dos botões de interesse
          600: '#2f855a',
        },
        'yellow': {
          500: '#ecc94b', // Cor de destaque
          600: '#d69e2e',
        },
      },
    },
  },
  plugins: [],
}