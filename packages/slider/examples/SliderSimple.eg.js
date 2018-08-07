import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// data
import data from './data.json';
// style
import styles from './SliderEg.style';
// components
import SlideCt from './SlideCt';
import SliderSimple from '../src/SliderSimple';

class SliderSimpleEg extends Component {
  state = {
    dataBanner: data,
  }

  renderBanner(d) {
    return d && d.map((item, index) => <SlideCt item={item} key={index} keya={index}/>);
  }

  render() {
    const { classes } = this.props;
    const bannerEl = this.renderBanner(this.state.dataBanner);
    return (
      <div className={classes.hsTest}>
        <div className={classes.slider}>
          <SliderSimple data={bannerEl}/>
        </div>
        <p>---</p>
        <div className={classes.slider}>
          <SliderSimple data={bannerEl} infiniteLoop/>
        </div>
        <p>---</p>
        <div className={classes.slider}>
          <SliderSimple data={bannerEl} infiniteLoop autoplay={false}/>
        </div>

      </div>
    );
  }
}

SliderSimpleEg.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(SliderSimpleEg);
