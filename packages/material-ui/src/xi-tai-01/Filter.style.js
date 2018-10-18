import stylesFixedBottom from '../../examples/page03/FixedBottom.style';

const styles = theme => ({
  floatingWrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit,
  },
  fixedBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 9,
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'nowrap',
    background: '#fff',
    borderTop: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0,0,0,.1)',
  },
  appBar: {
    position: 'relative',
    boxShadow: 'none',
  },
  toolbar: {
    color: theme.palette.secondary.main,
  },
  toolbarGutters: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  title: {
    flex: 1,
  },
  btnFilter: {
    color: '#fff',
  },
  iconFilter: {
    display: 'block',
    height: '1rem',
    width: '1rem',
    fontSize: 0,
    marginRight: theme.spacing.unit,
    background: {
      image: `url(${require('../../images/filter.svg')})`, // eslint-disable-line
      repeat: 'no-repeat',
      position: ['center', 0],
      size: 'contain',
    },
  },
  expansionPanel: {
    borderBottom: '1px solid #eee',
    boxShadow: 'none',
    marginTop: 0,
    marginBottom: 0,
    '& $expandedSummary': {
      minHeight: 'auto',
    },
    '& $contentSummary': {
      margin: '12px 0',
    },
  },
  expansionPanelSummary: {
    minHeight: 'auto',
  },
  expandedSummary: {},
  contentSummary: {
    margin: '12px 0',
  },
  expandMoreIcon: {
    color: '#ccc',
  },
  expansionPanelDetails: {
    borderTop: '1px solid #eee',
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
  },
  // checked: {},
  radioGroup: {
    width: '100%',
  },
});

export default theme => Object.assign({}, styles(theme), stylesFixedBottom(theme));
