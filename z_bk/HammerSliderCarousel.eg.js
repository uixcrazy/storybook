// tính phương thức mobile

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// data
import data from './data.json';
// style
import styles from '../packages/slider/examples/styles/SliderEg.style';
// components
import SlideCt from '../packages/slider/examples/SlideCt';
import HammerSlider from '../src/HammerSlider';
import HammerSliderCarousel from '../src/HammerSliderCarousel';

class HammerSliderCarouselEg extends Component {
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
          <HammerSlider data={bannerEl} />
        </div>
        <div className={classes.slider}>
          <HammerSliderCarousel data={bannerEl} />
        </div>
      </div>
    )
  }
}

HammerSliderCarouselEg.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(HammerSliderCarouselEg);
