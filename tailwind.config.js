module.exports = {
  mode: 'jit',
  important: true,
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // or 'media' or 'class'
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
        'focus-input': 'rgb(236, 237, 240)',
        'dialog-mask': 'rgba(0, 0, 0, .6)',

        // Light Theme
        'app-container': '#f3f6fd',
        'main-color': '#1f1c2e',
        'secondary-color': '#4A4A4A',
        'link-color': '#1f1c2e',
        'link-color-hover': '#c3cff4',
        'link-color-active': '#fff',
        'link-color-active-bg': '#1f1c2e',
        'projects-section': '#fff',
        'message-box-hover': '#fafcff',
        'message-box-border': '#e9ebf0',
        'more-list-bg': '#fff',
        'more-list-bg-hover': '#f6fbff',
        'more-list-shadow': 'rgba(209, 209, 209, 0.4)',
        'button-bg': '#1f1c24',
        'search-area-bg': '#fff',
        star: '#1ff1c2e',
        'message-btn': '#fff',
        scrollbar: '#e6eaea',
        'scrollbar-thumb': '#5081ad',
        'message-wrapper': 'rgb(244, 247, 248)',
        'avatar-wrapper': '#a2a2a51c',
        'dialog-bg': '#fff',

        // Dark Theme
        dark: {
          'app-container': '#111827',
          'main-color': '#fff',
          'secondary-color': 'rgba(255,255,255,.8)',
          'projects-section': '#1f2937',
          'link-color': 'rgba(255,255,255,.8)',
          'link-color-hover': 'rgba(195, 207, 244, 0.1)',
          'link-color-active-bg': 'rgba(195, 207, 244, 0.2)',
          'button-bg': '#1f2937',
          'search-area-bg': '#1f2937',
          'message-box-hover': '#243244',
          'message-box-border': 'rgba(255,255,255,.1)',
          star: '#ffd92c',
          'light-font': 'rgba(255,255,255,.8)',
          'more-list-bg': '#2f3142',
          'more-list-bg-hover': 'rgba(195, 207, 244, 0.1)',
          'more-list-shadow': 'rgba(195, 207, 244, 0.1)',
          'message-btn': 'rgba(195, 207, 244, 0.1)',
          'table-td-hover': 'rgba(66, 73, 98, .2)',
          'message-wrapper': '#fff',
          'dialog-bg': '#1f2f3c'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
