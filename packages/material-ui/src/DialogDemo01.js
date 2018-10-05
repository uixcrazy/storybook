import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { postData } from '../../../utils/fetch-api';

import withTheme from './withTheme';
import styles from './DialogDemo01.style';

class DialogDemo01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      email: null,
      fullnameValid: true,
      emailValid: true,
      formValid: false,
      openSnackbar: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      fullname,
      email,
    } = this.state;
    const data = {
      fullname, email,
    };
    postData({
      apiURL: 'https://httpbin.org',
      endpoint: '/post',
      data,
    }).then((resJson) => {
      if (resJson.json && resJson.json.fullname) {
        this.setState({
          openSnackbar: true,
        });
      }
    });
  }

  handleCloseSnackbar = (event) => { // eslint-disable-line
    this.setState({ openSnackbar: false });
  };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fullnameValid = true;
    let emailValid = true;
    switch (fieldName) {
      case 'fullname':
        fullnameValid = Boolean(value.match(/^([a-zA-Z'-\s]+){2,}$/));
        break;
      case 'email': {
        if (value) {
          emailValid = Boolean(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
        }
        break;
      }
      default:
        break;
    }
    this.setState({
      emailValid,
      fullnameValid,
    }, this.validateForm);
  }

  validateForm() {
    const {
      fullnameValid,
      emailValid,
    } = this.state;
    let formValid = false;
    if (fullnameValid && emailValid) {
      formValid = true;
    }
    this.setState({ formValid });
  }

  render() {
    const { classes, open, toggleOpen } = this.props;
    console.log(this.state.openSnackbar);
    return (
      <Fragment>
        <Dialog
          fullWidth={true}
          open={open}
          onClose={toggleOpen(false)}
          aria-labelledby="form-demo"
          classes={{
            paper: classes.dialogFullWidthPaper,
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <div
              id="form-booking-title"
              className={classes.nogcTitle}
            >
              Form Demo
              <IconButton
                className={classes.btnClose}
                onClick={toggleOpen(false)}>
                <IconClose
                  classes={{
                    root: classes.iconClose,
                  }}/>
              </IconButton>
            </div>
            <DialogContent classes={{ root: classes.nogcContent }}>
              <FormControl
                className={classes.formControl}
                aria-describedby="fullname"
                fullWidth
              >
                <InputLabel
                  FormLabelClasses={{
                    root: classes.nogcLabel,
                    focused: classes.nogcFocused,
                    filled: classes.nogcLabelFilled,
                  }}
                  htmlFor="fullname"
                >
                Name <span className={classes.required}>*</span>
                </InputLabel>
                <Input
                  id="fullname"
                  name="fullname"
                  error={!this.state.fullnameValid}
                  autoFocus
                  disableUnderline={true}
                  fullWidth={true}
                  onChange={this.handleInputChange}
                  classes={{
                    input: classes.nogcInput,
                    error: classes.nogcInputError,
                    underline: classes.nogcUnderline,
                  }}
                />
              </FormControl>
              <FormControl
                className={classes.formControl}
                aria-describedby="email"
                fullWidth
              >
                <InputLabel
                  FormLabelClasses={{
                    root: classes.nogcLabel,
                    focused: classes.nogcFocused,
                    filled: classes.nogcLabelFilled,
                  }}
                  htmlFor="email"
                >
                  Email
                </InputLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  error={!this.state.emailValid}
                  disableUnderline={true}
                  fullWidth={true}
                  onChange={this.handleInputChange}
                  classes={{
                    input: classes.nogcInput,
                    error: classes.nogcInputError,
                    underline: classes.nogcUnderline,
                  }}
                />
              </FormControl>
            </DialogContent>
            <div className={classes.btnGroup}>
              <button
                className={classes.btnPrimary}
                type="submit"
                onClick={toggleOpen(false)}
                disabled={!this.state.formValid}
              >Submit</button>
            </div>
          </form>
        </Dialog>
        {
          this.state.openSnackbar
            ? <Snackbar
              anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
              open={this.state.openSnackbar}
              autoHideDuration={6000}
              onClose={this.handleCloseSnackbar}
              // ContentProps={{
              //   'aria-describedby': 'message-id',
              // }}
              // message={<span
              //   id="message-id"
              //   className={classes.messageSnackbar}
              // >gửi thành công!!!</span>}
            >
              <SnackbarContent
                className={classes.messageSnackbar}
                aria-describedby="client-snackbar"
                message={
                  <span id="client-snackbar">
                    gửi thành công!!!
                  </span>
                } />
            </Snackbar>
            : null
        }
      </Fragment>
    );
  }
}

DialogDemo01.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default withTheme(injectSheet(styles)(DialogDemo01));
