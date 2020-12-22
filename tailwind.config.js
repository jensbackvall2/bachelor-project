module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.html',
        '**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        maxHeight: {
          'planetcard': '40vh',
          '1/2': '50vh',
        },
        maxWidth: {
          'planetcard': '40vh',
        },
        width: {
          'tutorial': '400vw',
        },
        colors: {
          'brorfelde-dark': "#3a3967",
        },
        backgroundColor: {
          'base': '#c33a5e',
          'tile': '#e6ddc5',
        },
      },
      /*backgroundColor: theme => ({
        'base': '#c33a5e',
        'tile': '#e6ddc5',
      }),*/
    },
    variants: {
      extend: {},
    },
    plugins: [],
});

