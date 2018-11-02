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
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.1),
    0px 2px 2px 0px rgba(0, 0, 0, 0.1),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
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
  labelContainer: {
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: 500,
  },
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
