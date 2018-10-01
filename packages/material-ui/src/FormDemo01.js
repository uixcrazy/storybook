import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import withTheme from './withTheme';
import { postData } from '../../../core/fetch-api';
import styles from './FormDemo01.style';

class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      mobile: null,
      email: null,
      comment: null,
      fullnameValid: true,
      emailValid: true,
      formValid: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const {
      fullname,
      mobile,
      email,
      comment,
    } = this.state;
    postData({
      apiURL: 'https://httpbin.org',
      endpoint: '/post',
      data: {
        fullname,
        mobile,
        email,
        comment,
      },
    }).then((jsonData) => {
      console.log(jsonData);
    });
    event.preventDefault();
  }

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
      mobile,
      fullnameValid,
      emailValid,
    } = this.state;
    let formValid = false;
    if (fullnameValid && emailValid && mobile) {
      formValid = true;
    }
    this.setState({ formValid });
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby="fullname"
          fullWidth
        >
          <InputLabel
            FormLabelClasses={{
              root: classes.apLabel,
              focused: classes.apFocused,
              filled: classes.apLabelFilled,
            }}
            htmlFor="full-name"
          >
            Name <span className={classes.required}>*</span>
          </InputLabel>
          <Input
            id="full-name"
            name="fullname"
            error={!this.state.fullnameValid}
            autoFocus
            disableUnderline={true}
            fullWidth={true}
            onChange={this.handleInputChange}
            classes={{
              input: classes.apInput,
              error: classes.apInputError,
              underline: classes.apUnderline,
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel
            FormLabelClasses={{
              root: classes.apLabel,
              focused: classes.apFocused,
              filled: classes.apLabelFilled,
            }}
            htmlFor="phone-number"
          >
            Phone NUmber <span className={classes.required}>*</span>
          </InputLabel>
          <Input
            id="phone-number"
            type="number"
            name="mobile"
            disableUnderline={true}
            fullWidth={true}
            onChange={this.handleInputChange}
            classes={{
              input: classes.apInput,
              underline: classes.apUnderline,
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
              root: classes.apLabel,
              focused: classes.apFocused,
              filled: classes.apLabelFilled,
            }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <Input
            id="email"
            type="email"
            error={!this.state.emailValid}
            disableUnderline={true}
            fullWidth={true}
            name="email"
            onChange={this.handleInputChange}
            classes={{
              input: classes.apInput,
              error: classes.apInputError,
              underline: classes.apUnderline,
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel
            FormLabelClasses={{
              root: classes.apLabel,
              focused: classes.apFocused,
              filled: classes.apLabelFilled,
            }}
            htmlFor="comment"
          >
            Other Information
          </InputLabel>
          <Input
            id="comment"
            disableUnderline={true}
            fullWidth={true}
            multiline
            rows={3}
            rowsMax={10}
            name="comment"
            onChange={this.handleInputChange}
            classes={{
              input: classes.apInput,
              underline: classes.apUnderline,
              multiline: classes.apMulti,
              inputMultiline: classes.apInputMulti,
            }}
          />
        </FormControl>
        <div className={classes.btnGroup}>
          <input
            className={classes.btnPrimary}
            type="submit"
            value="Submit"
            disabled={!this.state.formValid}
          />
        </div>
      </form>
    );
  }
}

FormDemo.propTypes = {
  classes: PropTypes.object,
};

export default withTheme(injectSheet(styles)(FormDemo));
