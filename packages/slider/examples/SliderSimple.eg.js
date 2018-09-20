import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import data from './data.json';
import styles from './styles/SliderEg.style';
import stylesTest from './styles/SliderSimple__test.style';
import SlideCt from './SlideCt';
import Slider, { SliderSimple } from '../src/SliderSimple';
import { withStyles } from '../../../core/AddStyles';

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
    const CustomSlider = withStyles(SliderSimple, stylesTest);
    return (
      <div className={classes.hsTest}>
        <div className={classes.slider}>
          <Slider data={bannerEl}/>
        </div>
        <p>---</p>
        <div className={classes.slider}>
          <Slider data={bannerEl} infiniteLoop/>
        </div>
        <p>---</p>
        <div className={classes.slider}>
          <Slider data={bannerEl} infiniteLoop autoplay={false}/>
        </div>
        <p>---</p>
        <div className={classes.slider}>
          <CustomSlider data={bannerEl}/>
        </div>

      </div>
    );
  }
}

SliderSimpleEg.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(SliderSimpleEg);
