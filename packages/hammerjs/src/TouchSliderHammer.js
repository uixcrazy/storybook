import React, { Component } from 'react';
import Hammerjs from 'hammerjs';
import attachRawCss from '../../../utils/attachRawCss';
import styles from '!!raw-loader!./TouchSliderHammer.css'; // eslint-disable-line

class TouchSliderHammer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      slideCount: 5,
    };
    this.createSlider = this.createSlider.bind(this);
  }

  componentDidMount() {
    this.createSlider();
  }

  createSlider() {
    const options = {
      // direction: Hammerjs.DIRECTION_ALL, // swipeup swipedown
      threshold: 1,
      velocity: 0.1,
      preventDefault: true,
    };
    const mc = new Hammerjs(this.swiper, options);
    mc.on('swipeleft swiperight', (ev) => {
      ev.preventDefault();
      if (ev.type === 'swipeleft') {
        this.goToSlide(this.state.activeSlide + 1);
      } else if (ev.type === 'swiperight') {
        this.goToSlide(this.state.activeSlide - 1);
      }
    });
  }

  goToSlide(number) {
    const { slideCount } = this.state;
    let activeSlide = null;
    if (number < 0) {
      activeSlide = 0;
    } else if (number > slideCount - 1) {
      activeSlide = slideCount - 1;
    } else {
      activeSlide = number;
    }
    this.setState({ activeSlide });
  }

  render() {
    const {
      activeSlide,
      slideCount,
    } = this.state;
    const percentage = -(100 / slideCount) * activeSlide;
    const disabledLeft = activeSlide === 0;
    const disabledRight = activeSlide === (slideCount - 1);
    return (
      <div className="TouchSlider">
        <div ref={(DOM) => {
          this.swiper = DOM;
        }} className="hammer">
          <div className="slider"
            style={{
              width: `${slideCount * 100}%`,
              transform: `translateX(${percentage}%)`,
            }}>
            <div className="slide">
              <div className="slide-ct">aaa</div>
            </div>
            <div className="slide">
              <div className="slide-ct">bbb</div>
            </div>
            <div className="slide">
              <div className="slide-ct">ccc</div>
            </div>
            <div className="slide">
              <div className="slide-ct">ddd</div>
            </div>
            <div className="slide">
              <div className="slide-ct">eee</div>
            </div>
          </div>
          <button disabled={disabledLeft} className="btnSwipeLeft"
            onClick={this.goToSlide.bind(this, activeSlide - 1)}>
            ⇠
          </button>
          <button disabled={disabledRight} className="btnSwipeRight"
            onClick={this.goToSlide.bind(this, activeSlide + 1)}>
            ⇢
          </button>
        </div>
        {/* eslint-disable */}
        <a href="https://blog.envylabs.com/build-your-own-touch-slider-with-hammerjs-af99665d2869"
          target="_blank"
          style={{
            color: '#0ff',
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>Refs</a>
      </div>
    )
  }
}

export default attachRawCss(styles, 'TouchSliderHammer', TouchSliderHammer);
