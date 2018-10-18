import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from '@material-ui/core/Button';
// import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grow from '@material-ui/core/Grow'; // or Slide
import styles from './Filter.style';

function Transition(props) {
  // return <Slide direction="up" {...props} />;
  return <Grow in={true} {...props} />;
}

// function FilterIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

class Filter extends Component {
  state = {
    open: true,
    price: 'all',
  };

  // this.initState = {
  //   price: 'all',
  // };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeCheckbox = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeRadioBtn = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  reset = () => {
    console.log('reset');

  }

  apply = () => {
    console.log('apply', this.state);
  }

  render() {
    const { classes, typeList, priceList } = this.props;
    return (
      <Fragment>
        <div className={classes.floatingWrap}>
          <Button
            className={classes.btnFilter}
            color="primary"
            variant="raised" // contained
            onClick={this.handleClickOpen}
          >
            <span className={classes.iconFilter}></span>
            Open full-screen dialog
          </Button>
        </div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar
              classes={{
                root: classes.toolbar,
                gutters: classes.toolbarGutters,
              }}
            >
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.title}>
                Bộ Lọc
              </Typography>
            </Toolbar>
          </AppBar>
          <div>
            <ExpansionPanel
              defaultExpanded={true}
              classes={{
                root: classes.expansionPanel,
              }}
            >
              <ExpansionPanelSummary
                classes={{
                  root: classes.expansionPanelSummary,
                  expandIcon: classes.expandMoreIcon,
                  expanded: classes.expandedSummary,
                  content: classes.contentSummary,
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>Loại</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <FormGroup row className={classes.formGroup}>
                  {
                    typeList && typeList.map(type => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            key={type.value}
                            checked={this.state[type.value]}
                            onChange={this.handleChangeCheckbox(type.value)}
                            value={type.value}
                            // color="primary"
                            classes={{
                              root: classes.checkboxRadio,
                              // checked: classes.checked,
                            }}
                          />
                        }
                        classes={{
                          root: classes.formControlLabel,
                        }}
                        style={{
                          width: '50%',
                        }}
                        label={type.label}
                      />
                    ))
                  }
                </FormGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
              defaultExpanded={true}
              classes={{
                root: classes.expansionPanel,
              }}
            >
              <ExpansionPanelSummary
                classes={{
                  root: classes.expansionPanelSummary,
                  expandIcon: classes.expandMoreIcon,
                  expanded: classes.expandedSummary,
                  content: classes.contentSummary,
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>Radio Button</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <RadioGroup
                  aria-label="price"
                  name="price"
                  className={classes.radioGroup}
                  value={this.state.price}
                  onChange={this.handleChangeRadioBtn('price')}
                >
                  {
                    priceList && priceList.map(price => (
                      <FormControlLabel
                        value={price.value}
                        control={<Radio className={classes.checkboxRadio}/>}
                        label={price.label}
                        classes={{
                          root: classes.formControlLabel,
                        }}
                      />
                    ))
                  }
                </RadioGroup>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <div className={classes.fixedBottom}>
            <button className={classes.btn} onClick={this.reset}>
              THIẾT LẬP LẠI
            </button>
            <button className={classes.btnPrimary} onClick={this.apply}>
              ÁP DỤNG
            </button>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

Filter.defaultProps = {
  typeList: [
    {
      value: 'loai1',
      label: 'Loại 1',
    },
    {
      value: 'loai2',
      label: 'Loại 2',
    },
    {
      value: 'loai3',
      label: 'Loại 3',
    },
    {
      value: 'loai4',
      label: 'Loại 4',
    },
  ],
  priceList: [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ],
  status: [
    // checkbox
  ],
};

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  priceList: PropTypes.array,
  typeList: PropTypes.array,
};

export default injectSheet(styles)(Filter);
