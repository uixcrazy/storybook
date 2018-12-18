import React from 'react';
import AnimateOnChange from 'react-animate-on-change';
import PropTypes from 'prop-types';
import attachRawCss from '../../../utils/attachRawCss';
import styleFirst from '!!raw-loader!./ex01.eg.css';// eslint-disable-line

class AppComponent extends React.Component {
  state = {
    diff: 0,
    score: 0,
  }

  componentDidMount() {
    // Call this function so that it fetch first time right after mounting the component
    this.incrementScore();

    // set Interval
    this.interval = setInterval(this.incrementScore, 1000);
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  incrementScore = () => {
    const diff = 10;
    this.setState(state => ({ // (state, props)
      diff,
      score: state.score + diff,
    }));
  }

  render() {
    const { diff, score } = this.state;
    return (
      <div className='App'>
        <AnimateOnChange
          baseClassName='Score'
          animationClassName='Score--bounce'
          animate={diff !== 0}>
            Score: {score}
        </AnimateOnChange>
      </div>
    );
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object,
};

export default attachRawCss(styleFirst, 'react-animate-on-change', AppComponent);
