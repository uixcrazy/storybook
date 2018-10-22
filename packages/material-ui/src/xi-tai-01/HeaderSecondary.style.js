export default theme => ({
  headerSecondary: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: `0 ${theme.spacing.unit}px`,
  },
  leftCt: {
    flex: '1 0 0',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  rightCt: {
    width: 24,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 10,
    '&.expanded': {
      width: '100%',
      paddingLeft: 36,
    },
  },
  arrowBackIcon: {
    marginLeft: 5,
    color: theme.palette.primary.contrastText,
  },
  detailName: {
    color: theme.palette.primary.contrastText,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: theme.spacing.unit,
  },
  searchIcon: {
    fontSize: '1.5rem',
    height: '3rem',
    lineHeight: '3rem',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    '&.hidden': {
      display: 'none',
    },
  },
});
