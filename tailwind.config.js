/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        lingtCyan: 'hsl(193, 38%, 86%)',
        NeonGreen: 'hsl(150, 100%, 66%)',
        GrayishBlue: 'hsl(217, 19%, 38%)',
        DarkGrayishBlue: 'hsl(217, 19%, 24%)',
        DarkBlue: 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        'manrope': ['Manrope'],
      },
      letterSpacing: {
        widest: '.3rem'
      },
    },
  },
  plugins: [],
};