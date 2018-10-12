export default theme => ({
  btn: {
    margin: theme.spacing.unit,
    flex: '1 1 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    cursor: 'pointer',
    minHeight: '2.25rem',
    lineHeight: '1.4rem',
    fontSize: '0.875rem',
    borderRadius: '3px',
    paddingTop: '2px',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    letterSpacing: '1px',
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    background: '#efefef',
    color: theme.palette.secondary.main,
    fontWeight: 500,
    marginLeft: 4,
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
  btnPrimary: {
    composes: '$btn',
    fontWeight: 500,
    marginRight: 4,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
});
