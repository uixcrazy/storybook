import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './FixedBottom.style';
import FormBooking from '../../src/DialogDemo01';

class FixedBottom extends Component {
  state = {
    open: false,
  };

  toggleOpen = open => () => {
    this.setState({
      open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Fragment>
          <button className={classes.btnPrimary}
            onClick={this.toggleOpen(true)}>
            static
          </button>
          <button className={classes.btn}
            onClick={this.toggleOpen(true)}>
            open dialog
          </button>
        </Fragment>
        <FormBooking
          open={this.state.open}
          toggleOpen={this.toggleOpen}
        />
      </Fragment>
    );
  }
}

FixedBottom.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(FixedBottom);
