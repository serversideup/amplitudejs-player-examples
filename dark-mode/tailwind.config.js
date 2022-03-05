const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      colors: {
        'player-light-background': '#FCFCFD',
        'player-light-border': 'rgba(15, 23, 42, 0.06)',
        'control-panel-light-background': '#F9FAFB',
        'play-pause-light-border': 'rgba(15, 23, 42, 0.06)',

        'player-dark-background': 'rgba(30, 41, 59, 0.7)',
        'player-dark-border': 'rgba(255, 255, 255, 0.16)',
        'control-panel-dark-background': 'rgba(23, 31, 50, 0.5);',
        'cover-dark-border': 'rgba(255, 255, 255, 0.1);',
        'play-pause-dark-border': 'rgba(255, 255, 255, 0.06)',
        'play-pause-dark-background': '#2F3B4F',

        'highlight': 'rgba(56, 189, 248, 0.17)'
      },

      boxShadow: {
        'player-light': '0px 15px 25px rgba(15, 23, 42, 0.1), 0px 5px 10px rgba(15, 23, 42, 0.04)',
        'player-dark': 'inset 0px 2px 4px rgba(255, 255, 255, 0.06);'
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      height: {
        'control-panel': '4.5rem'
      },

      width: {
        'player': '640px'
      }
    },
  },
  plugins: [],
}
