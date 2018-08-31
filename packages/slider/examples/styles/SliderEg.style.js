export default () => ({
  hsTest: {
    marginTop: 35,
    '@media only screen and (max-width: 1280px)': {
      marginTop: 20,
    },
  },
  slider: {
    width: 900,
    height: 500,
    border: '2px solid #f5f5f5',
    padding: '5px 5px 0',
    '@media only screen and (max-width: 1280px)': {
      maxWidth: 700,
      width: '100%',
      height: 400,
    },
  },
  heading02: {
    color: '#364959',
    padding: '20px 10px 10px',
  }
});
