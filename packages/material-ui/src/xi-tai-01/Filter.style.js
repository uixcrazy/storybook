export default theme => ({
  floatingWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit,
  },
  appBar: {
    position: 'relative',
  },
  title: {
    flex: 1,
  },
  btnFilter: {
    color: '#fff',
  },
  iconFilter: {
    display: 'block',
    height: '1rem',
    width: '1rem',
    fontSize: 0,
    marginRight: theme.spacing.unit,
    background: {
      image: `url(${require('../../images/filter.svg')})`, // eslint-disable-line
      repeat: 'no-repeat',
      position: ['center', 0],
      size: 'contain',
    },
  },
});
