import React, { Component, Fragment } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import defaultStyles from './Example.style';

class Example extends Component {
  static propTypes = {
    classes: PropTypes.object,
  }

  static defaultProps = {
  }

  state = {}

  handleChange = (e) => { // eslint-disable-line
    // this.setState({ value: e.target.value });

    // this.setState((state, props) => {
    //   return { counter: state.counter + props.step };
    // });
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        content here
      </div>
    );
  }
}

export default withStyles(defaultStyles, Example);
