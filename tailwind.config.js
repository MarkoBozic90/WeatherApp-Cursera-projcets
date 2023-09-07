module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: true,
  theme: {
    screens: {
      xxs: '300px',
      xs: '420px',
      sm: '600px',
      md: '961px',
      md1: '1025px',
      lg: '1281px',
      xl: '1920px',
      xxl: '2560px',
      // add 4k screen
      '4k': '3840px',
      print: {raw: 'print'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
