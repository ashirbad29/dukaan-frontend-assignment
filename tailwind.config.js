module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      subtle: '0px 2px 8px rgba(26, 24, 30, 0.06)'
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '540px',

      'md': '720px',

      'lg': '960px',

      'xl': '1144px',

      '2xl': '1536px',
    },
    colors: {
      primary: '#146EB4',
      black: {
        "dark": '#1A181E',
        "light": '#4D4D4D',
        "extraLight": '#D9D9D9',
        "lighter": '#F2F2F2',
        "lightest": '#FAFAFA',
      },
      white: "#FFFFFF"
    },
    extend: {
      fontFamily: {
        default: ['Galano Grotesque', 'san-serif']
      }
    },
  },
  plugins: [],
}
