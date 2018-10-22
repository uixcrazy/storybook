
export default theme => ({
  expansionPanel: {
    boxShadow: 'none',
    marginTop: 0,
    marginBottom: 0,
    '& $expandedSummary': {
      minHeight: 'auto',
    },
    '& $contentSummary': {
      margin: '12px 0',
    },
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)', // rgba(0, 0, 0, 0.12);
    },
  },
  expansionPanelExpanded: {
    borderBottom: '1px solid #eee',
    '&::before': {
      opacity: 1,
    },
    '& $selected': {
      display: 'none',
    },
  },
  expansionPanelSummary: {
    minHeight: 'auto',
  },
  heading: {
    flex: '1 0 0',
    paddingRight: theme.spacing.unit * 2,
  },
  selected: {
    color: '#999',
    paddingRight: theme.spacing.unit * 2.5,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  expandedSummary: {},
  contentSummary: {
    margin: '12px 0',
    display: 'flex',
    width: '100%',
  },
  expandMoreIcon: {
    color: '#ccc',
  },
  expansionPanelDetails: {
    borderTop: '1px solid #f5f5f5',
    borderBottom: '2px solid #f5f5f5',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  formGroup: {
    width: '100%',
  },
  formControlLabel: {
    margin: 0,
  },
  checkboxRadio: {
    color: '#ccc',
    marginLeft: '-12px',
    // '&$checked': {
    //   color: green[500],
    // },
    '&$checkboxRadioDisabled': {
      color: 'rgba(0, 0, 0, 0.16)',
    },
  },
  // checked: {},
  checkboxRadioDisabled: {},
  radioGroup: {
    width: '100%',
  },
});
