/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: {
        1: 'transparent',
        2: 'rgba(0, 0, 0, 0.2)'
      },
      brown: {
        1: '#8B7C6E',
        2: '#6F6357',
        3: '#D9BDAB',
        4: '#F2E9E4'
      },
      gray: {
        1: '#F2F2F2',
        2: '#E5E5E5'
      },
      white: '#FFFFFF',
      black: '#000000',
      red: '#FF0000',
      green: '#00FF00',
      blue: '#0000FF',
      modal: 'rgba(0,0,0,0.2)',
      yellow: {
        400: '#FCD34D',
        500: '#FBBF24'
      },
      gray: '#6B7280'
    }
  },
  plugins: []
}
