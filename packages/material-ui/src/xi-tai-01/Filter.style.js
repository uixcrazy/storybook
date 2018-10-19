import stylesFixedBottom from '../../examples/page03/FixedBottom.style';

const styles = theme => ({
  floatingWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit,
  },
  dialogFullScreen: {
    position: 'relative',
    overflow: 'hidden',
  },
  fixedBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 9,
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'nowrap',
    background: '#fff',
    borderTop: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0,0,0,.1)',
  },
  appBar: {
    position: 'relative',
    boxShadow: 'none',
  },
  ctFilter: {
    marginBottom: '3.5rem',
    overflowY: 'auto',
    flex: '1 0',
  },
  toolbar: {
    color: theme.palette.secondary.main,
  },
  toolbarGutters: {
    paddingLeft: 0,
    paddingRight: 0,
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

export default theme => Object.assign({}, styles(theme), stylesFixedBottom(theme));
