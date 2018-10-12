
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
    paddingLeft: 3,
    marginLeft: 5,
  },
  searchInput: {
    // display: 'flex',
    // alignItems: 'center',
    outline: 0,
    width: '100%',
    fontSize: '0.875rem',
    height: '2.5rem',
    lineHeight: '2.5rem',
    paddingLeft: '2rem',
    paddingRight: '.5rem',
    border: '1px solid rgba(151,151,151,.2)',
    borderRadius: '4px',
    paddingTop: '2px',
    opacity: 0.9,
    '&:focus': {
      opacity: 1,
    },
  },
  suggestions: {
    position: 'absolute',
    width: '100%',
    background: '#fff',
    top: '3.5rem',
    borderBottom: '1px solid #efefef',
  },
  predictionsItem: {
    padding: {
      top: theme.spacing.unit / 2,
      right: theme.spacing.unit,
      bottom: theme.spacing.unit / 2,
      left: theme.spacing.unit / 2,
    },
    display: 'flex',
    '&:hover': {
      background: '#fffef7',
    },
  },
  predictionsItemActive: {
    composes: '$predictionsItem',
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
  placeIcon: {
    color: '#ccc',
    fontSize: '1.25rem',
  },
  mainText: {
    fontSize: '0.875rem',
    color: '#333',
  },
  secondaryText: {
    display: 'block',
    color: '#888',
    fontSize: '0.813rem',
    fontStyle: 'italic',
  },
});

