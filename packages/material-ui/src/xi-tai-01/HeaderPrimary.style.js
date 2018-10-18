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
  btnCallWrap: {
    width: 56,
    overflow: 'hidden',
    transition: 'all 300ms linear',
    paddingLeft: 4,
    paddingRight: 4,
    position: 'relative',
    left: 0,
    textDecoration: 'none',
    '&.isFocus': {
      width: 0,
      left: 5,
    },
  },
  btnCall: {
    width: 48,
    padding: 0,
    height: 48,
    display: 'flex',
    borderRadius: 0,
    '&:hover': {
      borderRadius: theme.spacing.unit,
    },
  },
  iconCall: {
    fontSize: '1.5rem',
    color: theme.palette.secondary.main,
  },
  btnCallLabel: {
    display: 'flex',
    flexDirection: 'column',
  },
  labelCall: {
    color: theme.palette.secondary.main,
    fontSize: '0.75rem',
  },
});
