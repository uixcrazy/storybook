// Variables
export const VARS = {
  colorPrimary: '#121212',
  backgroundColor: '#fefefe',
  paddingLeftRight: '1rem',
  primaryFont: '-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif',
  secondaryFont: '"Montserrat", sans-serif',
};

export const BREAKPOINTS = {
  mobile: ''
}

export const LAYOUT_MAXWIDTH = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 768px)': {
    maxWidth: '1320px',
  }
}


export const theme = Object.assign({},
  VARS,
  {
    breakpoints: BREAKPOINTS,
    layoutMaxWidth: LAYOUT_MAXWIDTH
  },
  /*, and other function */)