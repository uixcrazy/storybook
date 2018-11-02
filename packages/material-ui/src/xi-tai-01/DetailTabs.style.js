export default theme => ({
  // root: {
  //   flexGrow: 1,
  //   width: '100%',
  //   position: 'relative',
  //   backgroundColor: theme.palette.background.paper,
  // },
  rootAppBar: {
    boxShadow: 'none',
  },
  positionFixedAppBar: {
    top: 'auto', // instead of 3.5rem
  },
  tabsRoot: {
    // backgroundColor: theme.palette.secondary.main,
    '& ::-webkit-scrollbar': {
      display: 'none', //* remove scrollbar space */
    },
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&$tabFullWidth': {
      flexShrink: 0,
    },
    '&:hover': {
      color: theme.palette.secondary.dark,
      opacity: 1,
    },
    '&$tabSelected': {
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:focus': {
      color: theme.palette.secondary.dark,
    },
  },
  tabSelected: {},
  tabFullWidth: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
  tabContainer: {
    marginTop: '3rem',
    background: '#fff',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflowY: 'auto',
  },
});
