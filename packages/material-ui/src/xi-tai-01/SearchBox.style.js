
export default theme => ({
  searchBox: {
    flex: 1,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    fontSize: '1.5rem',
    height: '2.75rem',
    lineHeight: '2.25rem',
    color: '#aaa',
    paddingLeft: 2,
    marginLeft: 5,
  },
  btnBlurSearch: {
    position: 'absolute',
    left: -50,
    top: 0,
    zIndex: 10,
    width: 50,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  arrowBackIcon: {
    marginLeft: 5,
    color: '#fff',
  },
  searchInput: {
    outline: 0,
    width: '100%',
    fontSize: '0.875rem',
    height: '2.5rem',
    lineHeight: '2.5rem',
    paddingLeft: '2rem',
    paddingRight: '.5rem',
    border: 0,
    borderRadius: '4px',
    paddingTop: '3px',
    opacity: 0.9,
    '&:focus': {
      opacity: 1,
      // '& + $btnBlurSearch': {
      //   display: 'block',
      // },
    },
  },
  suggestions: {
    position: 'absolute',
    width: '100%',
    background: '#fff',
    top: '3.5rem',
    borderBottom: '1px solid #efefef',
  },
  predictions: {
    borderBottom: '2px solid #efefef',
    paddingBottom: theme.spacing.unit / 2,
  },
  suggestBox: {
    paddingTop: theme.spacing.unit / 2,
    borderBottom: '2px solid #efefef',
    paddingBottom: theme.spacing.unit / 2,
  },
  prdTitle: {
    padding: {
      top: theme.spacing.unit,
      left: theme.spacing.unit,
      bottom: theme.spacing.unit / 2,
      right: theme.spacing.unit,
    },
    color: '#888',
    textTransform: 'uppercase',
    fontSize: '0.813rem',
  },
  prdItem: {
    padding: {
      top: 6,
      right: theme.spacing.unit,
      bottom: 6,
      left: theme.spacing.unit / 2,
    },
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      background: '#fffef7',
    },
  },
  prdItemActive: {
    composes: '$prdItem',
    background: '#eee',
  },
  prdIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: theme.spacing.unit / 2,
  },
  prdCt: {

  },
  prdIconIco: {
    color: '#ccc',
    fontSize: '1.25rem',
  },
  mainText: {
    fontSize: '1rem',
    color: '#333',
  },
  secondaryText: {
    display: 'block',
    color: '#888',
    fontSize: '0.813rem',
    // fontStyle: 'italic',
  },
  tagList: {
    display: 'flex',
    listStyle: 'none',
    padding: theme.spacing.unit,
  },
  tagItem: {
    background: '#f3f4f7',
    color: '#333',
    fontSize: '0.813rem',
    borderRadius: '3px',
    padding: '8px 10px',
    marginRight: theme.spacing.unit,
  },
});
