module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        '1/2': '50%'
      },
      colors: {
        primary: '#5081ad',
        'light-primary': '#74a0c7',
        'dark-primary': '#4b779d',
        input: 'rgb(246, 246, 246)',
        'focus-input': 'rgb(236, 237, 240)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
