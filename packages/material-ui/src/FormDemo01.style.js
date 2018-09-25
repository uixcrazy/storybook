export default theme => ({
  container: {
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  apInput: {
    borderRadius: 3,
    border: '1px solid #ced4da',
    fontSize: '.875rem',
    padding: '10px 12px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#6a6c6d',
      outline: 'none',
    },
  },
  apInputError: {
    '& $apInput': {
      border: '1px solid #fe4040',
    },
  },
  apMulti: {
    padding: 0,
  },
  apInputMulti: {
    boxSizing: 'border-box',
  },
  apLabel: {
    top: 5,
    left: 12,
    fontSize: '.875rem',
    backgroundColor: '#fff',
    zIndex: 10,
    display: 'inline-flex',
    padding: {
      right: 2,
      left: 2,
    },
    '&$apFocused': {
      top: 10,
      left: 10,
      color: theme.palette.secondary.main,
      '& $required': {
        color: '#fe4040',
        display: 'inline',
      },
    },
    '&$apLabelFilled': {
      top: 10,
      left: 10,
    },
  },
  required: {
    display: 'none',
    fontSize: '1.25rem',
    marginLeft: '3px',
  },
  apFocused: {},
  apLabelFilled: {},
  btnClose: {
    color: '#ccc',
    position: 'absolute',
    right: '0.25rem',
    top: '0.25rem',
    width: '2rem',
    height: '2rem',
  },
  iconClose: {
    fontSize: '1.25rem',
  },
  apUnderline: {
    borderBottom: 0,
    '&:after': {
      borderBottom: 0,
    },
  },
  btnGroup: {
    display: 'flex',
    flex: '0 1 100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 1.5,
  },
  btnPrimary: {
    minWidth: '10rem',
    textTransform: 'initial',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
    border: 0,
    cursor: 'pointer',
    maxWidth: '100%',
    fontSize: '0.875rem',
    color: '#fff',
    minHeight: '2.25rem',
    fontWeight: 400,
    alignItems: 'center',
    borderRadius: '1rem',
    letterSpacing: '1.2px',
    '&:hover:enabled': {
      color: '#014c8c',
    },
    '&:disabled': {
      opacity: 0.3,
    },
  },
});
