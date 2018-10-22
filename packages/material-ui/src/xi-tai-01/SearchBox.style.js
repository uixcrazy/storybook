
const leftPositionBackBtn = -48;

export default theme => ({
  // '@keyframes toLeft': {
  //   '0%': {
  //     left: 0,
  //     display: 'block',
  //   },
  //   '100%': {
  //     left: leftPositionBackBtn,
  //   },
  // },
  // '@keyframes toRight': {
  //   '0%': {
  //     left: leftPositionBackBtn,
  //   },
  //   '100%': {
  //     left: 0,
  //   },
  // },
  searchBox: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    top: 1,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    fontSize: '1.5rem',
    height: '2.75rem',
    lineHeight: '2.25rem',
    color: '#ccc',
    paddingLeft: 2,
    paddingRight: 3,
    marginLeft: 3,
  },
  back: {
    position: 'absolute',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    // animation: 'toLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    left: leftPositionBackBtn,
    top: 0,
    width: -leftPositionBackBtn,
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  backHiden: {
    composes: '$back',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    // animation: 'toRight 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    left: 0,
  },
  btnBlurSearch: {
    width: -leftPositionBackBtn,
    '&:focus, &:active': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  arrowBackIcon: {
    marginLeft: 5,
    color: '#fff',
  },
  searchInput: {
    outline: 0,
    zIndex: 1,
    flex: '1 1 auto',
    fontSize: '0.875rem',
    height: '2.5rem', // lineHeight
    border: 0,
    borderRadius: '4px',
    padding: {
      top: '3px',
      right: '.5rem',
      left: '1.5rem',
    },
    backgroundColor: '#FAFCED',
    '&:focus': {
      backgroundColor: '#fff',
    },
    '&::placeholder': {
      color: '#999',
      opacity: 0.5,
    },
  },
  suggestions: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    marginTop: '3.5rem',
    maxHeight: 'calc(100vh - 3.5rem)',
    borderBottom: '1px solid #efefef',
    overflowY: 'auto',
  },
  collapseContainer: {
    background: '#fff',
  },
  history: {
    paddingLeft: 5,
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
    color: '#555',
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
    borderRadius: '4px',
    padding: '8px 10px',
    marginRight: theme.spacing.unit,
  },
});
