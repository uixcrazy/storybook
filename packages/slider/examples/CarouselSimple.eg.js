// tính phương thức mobile

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from '../../../utils/injectSheetWithTheme';

import data from './data.json';
import styles from './styles/SliderEg.style';
import SlideCt from './SlideCt';
import CarouselSimpleDefault from '../src/CarouselSimple';

class CarouselSimpleEg extends Component {
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
        <h2 className={classes.heading02}>detault</h2>
        <div className={classes.slider}>
          <CarouselSimpleDefault data={bannerEl} autoplay={false}/>
        </div>
        <h2 className={classes.heading02}>infiniteLoop vs swipeEnabled</h2>
        <div className={classes.slider}>
          <CarouselSimpleDefault data={bannerEl} infiniteLoop/>
        </div>
      </div>
    );
  }
}

CarouselSimpleEg.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles, CarouselSimpleEg);
