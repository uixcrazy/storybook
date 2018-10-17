export default theme => ({
  headerPrimary: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  menu: {
    color: '#fff',
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
  animate: {
    width: 56,
    overflow: 'hidden',
    transition: 'all 300ms linear',
    paddingLeft: '.5rem',
    position: 'relative',
    left: 0,
    '&.isFocus': {
      width: 0,
      left: 5,
    },
  },
  btnCallWrap: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: -6,
    left: -5,
    width: 52,
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
