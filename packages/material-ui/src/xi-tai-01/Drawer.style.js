export default theme => ({
  sideMenuWrap: {
    width: '100%',
    height: '100%',
    background: '#333',
    color: '#fff',
  },
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    height: '100%',
  },
  ctMenu: {
    flex: '1 1 auto',
    color: '#fff',
  },
  footer: {

  },
  listItem: {
    borderBottom: '1px solid #43505a',
  },
  listItemText: {
    padding: 0,
    fontSize: '1.25rem',
    fontWeight: 300,
    color: '#fff',
    letterSpacing: '1px',
    marginRight: theme.spacing.unit,
  },
  drawerTitle: {
    color: '#ddd',
    fontSize: '0.875rem',
    borderBottom: '1px solid #43505a',
    padding: '5px 16px 8px',
  },
  drawerTextSuccess: {
    color: theme.palette.primary.main,
    marginLeft: 3,
    marginRight: 3,
  },
  hotline: {
    display: 'block',
    color: '#fff',
    padding: theme.spacing.unit * 2,
    textDecoration: 'none',
  },
  btnClose: {
    color: theme.palette.primary.main,
    position: 'absolute',
    right: '0.5rem',
    top: '0.625rem',
  },
  iconClose: {
    fontSize: '2rem',
  },
  logo: {
    height: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > a': {
      height: '5rem',
      width: '5rem',
      display: 'block',
      background: {
        image: 'url(../../images/logo_dark.svg)})',
        repeat: 'no-repeat',
      },
      fontSize: 0,
    },
  },
});
