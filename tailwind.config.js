module.exports = {
  purge: ['./public/**/*.html', './public/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00509B',
          200: '#003363',
        },
        secondary: {
          100: '#363636',
          200: '#1A1A1A',
        },
      },
      fontFamily: {
        body: ['Roboto'],
      },
      borderRadius: {
        '40px': '40px',
        '20px': '25px',
      },
      boxShadow: {
        'inner-bottom': 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.1)',
      },
      maxHeight: {
        hero: '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
