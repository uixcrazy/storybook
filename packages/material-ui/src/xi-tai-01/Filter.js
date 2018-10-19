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
import Grow from '@material-ui/core/Grow'; // or Slide
import FilterPanelMulti from './FilterPanelMulti';
import FilterPanelSingle from './FilterPanelSingle';
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

const initialState = {
  quaMulti: ['khom', 'dudu'], // ~ [<<all>>]
  hoaMulti: null, // ~ [<<all>>]
  quaSingle: 'all',
  hoaSingle: 'all',
};

class Filter extends Component {
  state = {
    open: true,
    ...initialState,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateDataFilter = (name, value) => {
    this.setState({ [name]: value });
  }

  reset = () => {
    this.setState(state => ({ open: state.open, ...initialState }));
  }

  apply = () => {
    console.log('apply', this.state);
    this.handleClose();
  }

  render() {
    const { classes } = this.props;
    // console.log(this.state);
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
          classes={{
            paperFullScreen: classes.dialogFullScreen,
          }}
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
              <Typography variant="inherit" color="inherit" className={classes.title}>
                Bộ Lọc
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.ctFilter}>
            <FilterPanelMulti
              defaultExpanded={false}
              isAlwaysExpanded={true}
              heading="Các loại quả Multi"
              keyName="quaMulti"
              selected={this.state.quaMulti}
              updateDataFilter={this.updateDataFilter}
              data={this.props.quaList}
            />
            <FilterPanelMulti
              defaultExpanded={false}
              heading="Các loại hoa Multi"
              keyName="hoaMulti"
              widthItem="100%"
              selected={this.state.hoaMulti}
              updateDataFilter={this.updateDataFilter}
              data={this.props.hoaList}
            />
            <FilterPanelSingle
              defaultExpanded={false}
              // isAlwaysExpanded={true}
              heading="Các loại quả"
              keyName="quaSingle"
              selected={this.state.quaSingle}
              updateDataFilter={this.updateDataFilter}
              data={this.props.quaList}/>

            <FilterPanelSingle
              defaultExpanded={false}
              heading="Các loại hoa"
              keyName="hoaSingle"
              selected={this.state.hoaSingle}
              updateDataFilter={this.updateDataFilter}
              data={this.props.hoaList}
            />
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
  quaList: [
    {
      value: 'dudu',
      label: 'đu đủ',
    },
    {
      value: 'man',
      label: 'Mận',
    },
    {
      value: 'duahau',
      label: 'Dưa hấu',
    },
    {
      value: 'khom',
      label: 'Khóm',
    },
    {
      value: 'mangcut',
      label: 'Măng cụt',
    },
  ],
  hoaList: [
    {
      value: 'boconganh',
      label: 'hoa bồ công anh',
    },
    {
      value: 'camtucau',
      label: 'cẩm tú cầu',
    },
    {
      value: 'tramoi',
      label: 'bông trâm ổi',
    },
    {
      value: 'anhtuc',
      label: 'hoa anh túc',
    },
    {
      value: 'ixora',
      label: 'Ixora - bông trang',
    },
  ],
};

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  priceList: PropTypes.array,
  typeList: PropTypes.array,
};

export default injectSheet(styles)(Filter);
