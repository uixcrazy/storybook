export default theme => ({
  dialogFullWidthPaper: {
    margin: {
      top: theme.spacing.unit,
      right: theme.spacing.unit,
      bottom: theme.spacing.unit,
      left: theme.spacing.unit,
    },
    maxHeight: 'calc(100% - 1rem)',
  },
  nogcTitle: {
    color: theme.palette.secondary.main,
    fontSize: '1.375rem',
    fontWeight: 300,
    textAlign: 'center',
    padding: {
      top: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
      bottom: 0,
      left: theme.spacing.unit * 2,
    },
  },
  nogcContent: {
    padding: {
      right: theme.spacing.unit * 2,
      bottom: 0,
      left: theme.spacing.unit * 2,
    },
  },
  nogcInput: {
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
  nogcInputError: {
    '& $nogcInput': {
      border: '1px solid #fe4040',
    },
  },
  nogcMulti: {
    padding: 0,
  },
  nogcInputMulti: {
    boxSizing: 'border-box',
  },
  nogcLabel: {
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
    '&$nogcFocused': {
      top: 10,
      left: 10,
      color: theme.palette.secondary.main,
      '& $required': {
        color: '#fe4040',
        display: 'inline',
      },
    },
    '&$nogcLabelFilled': {
      top: 10,
      left: 10,
    },
  },
  required: {
    display: 'none',
    fontSize: '1.25rem',
    marginLeft: '3px',
  },
  nogcFocused: {},
  nogcLabelFilled: {},
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
  nogcUnderline: {
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
    margin: {
      top: theme.spacing.unit * 1.5,
      bottom: theme.spacing.unit * 1.5,
    },
  },
  btnPrimary: {
    minWidth: '10rem',
    color: theme.palette.primary.main,
    textTransform: 'initial',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
    border: 0,
    cursor: 'pointer',
    maxWidth: '100%',
    fontSize: '0.875rem',
    minHeight: '2.25rem',
    fontWeight: 400,
    alignItems: 'center',
    borderRadius: '1rem',
    letterSpacing: '1.2px',
    '&:hover:enabled': {
      color: '#fff',
    },
    '&:disabled': {
      opacity: 0.3,
    },
  },
  messageSnackbar: {
    maxWidth: '30rem',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    bottom: 10,
  },
});
