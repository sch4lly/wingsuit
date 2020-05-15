module.exports = {
  important: false,
  theme: {
    fontFamily: {
      sans: ['SourceSans', '-apple-system', 'BlinkMacSystemFont'],
    },
    maxWidth: {
      'none': 'none',
      'container': '1200px',
      'xs': '672px',
      'sm': '700px',
      'md': '960px',
      'lg': '1600px',
    },
    colors: {
      transparent: 'transparent',
      black: '#222222̣̣̣',
      white: '#FFFFFF',
      red: '#D6ABAE',
      beige: '#E7C689',
      balzac_blue: '#97b5bd',
      green: '#deede8',
      blue: '#97B5BD',
      primary: '#fcaca9',
      secondary: '#77b88f',
      success: '#e39b98',
      warning: '#c98987',
      disabled: '#f7f7f7',
      gray: {
        xxlight: '#f5f5f5',
        xlight: '#cecece',
        light: '#9b9b9b',
        xmedium: '#aaaaaa',
        medium: '#9e9e9e',
        dark: '#4a4a4a',
      }
    },
  },
  variants: {
    opacity: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover'],
  },
};
