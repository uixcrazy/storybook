export default theme => ({
  headerPrimary: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    height: '1.75rem',
    width: '2.75rem',
    display: 'block',
    fontSize: 0,
    background: {
      image: `url(${require('../../images/logo-mini.svg')})`, // eslint-disable-line
      repeat: 'no-repeat',
      position: ['center', 0],
      size: 'contain',
    },
  },
  iconBtnCall: {
    color: 'cyan',
    padding: {
      top: theme.spacing.unit,
      left: `${theme.spacing.unit - 2}px`,
      bottom: theme.spacing.unit,
      right: theme.spacing.unit,
    },
  },
  iconMenu: {
    fontSize: '1.75rem',
  },
});
