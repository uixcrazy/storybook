export default theme => ({
  headerPrimary: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  menu: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    height: '1.75rem',
    width: '2.25rem',
    display: 'block',
    fontSize: 0,
    marginLeft: theme.spacing.unit,
    background: {
      image: `url(${require('../../images/logo-mini.svg')})`, // eslint-disable-line
      repeat: 'no-repeat',
      position: ['center', 0],
      size: 'contain',
    },
  },
  iconMenu: {
    position: 'absolute',
    fontSize: '1.75rem',
    top: 1,
    left: -15,
  },
  btnCallWrap: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: -6,
  },
  iconCall: {
    fontSize: '1.5rem',
    color: theme.palette.secondary.main,
  },
  labelCall: {
    color: theme.palette.secondary.main,
    fontSize: '0.75rem',
    position: 'absolute',
    top: 38,
  },
});
