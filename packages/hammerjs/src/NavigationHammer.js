import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hammerjs from 'hammerjs';

import './NavigationHammer.css';

class NavigationHammer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      widthTabs: null,
      widthSwiper: null,
      maxTx: null,
      hasTabs: false,
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.createSlider = this.createSlider.bind(this);
  }

  componentDidMount() {
    const widthTabs = this.getWidthTabs();
    const { paddingLeft, paddingRight } = this.props;
    if (this.state.widthTabs !== widthTabs) {
      this.setState({
        widthTabs
      });
      const widthSwiper = this.swiper.clientWidth;
      if (widthSwiper < widthTabs) {
        const maxTx = -(widthTabs - widthSwiper + paddingRight);
        this.createSlider();
        this.setState({
          translateX: paddingLeft,
          hasTabs: true,
          widthSwiper,
          maxTx
        });
      }
    }
  }

  // componentDidUpdate() {
  //   // BEFORE: remove old slider
  //   this.createSlider();
  // }

  getWidthTabs() {
    const listChildNodes = this.tabs.childNodes;
    let totalWidth = 0;
    if (listChildNodes && listChildNodes.length > 0) {
      var nodesArray = [].slice.call(listChildNodes);
      totalWidth = nodesArray.reduce((accumulator, currentNode) => {
        return accumulator + currentNode.offsetWidth;
      }, 0);
    }
    return totalWidth;
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
        this.nextSlide();
        console.log('swipeleft');
      } else if (ev.type === 'swiperight') {
        this.prevSlide();
      }
    });
  }

  prevSlide() {
    const { step, paddingLeft } = this.props;
    const { translateX } = this.state;
    if (translateX < paddingLeft) {
      const newTranslateX = translateX + step;
      this.setState({
        translateX: (newTranslateX < paddingLeft) ? newTranslateX : paddingLeft,
      });
    }
  }

  nextSlide() {
    const { step } = this.props;
    const { translateX, maxTx } = this.state;
    if (maxTx < translateX) {
      const newTranslateX = translateX - step;
      this.setState({
        translateX: (newTranslateX > maxTx) ? newTranslateX : maxTx,
      });
    }
  }

  render() {
    const {
      paddingLeft,
      paddingRight,
    } = this.props;
    const {
      translateX,
      widthTabs,
      hasTabs,
      maxTx
    } = this.state;
    const disabledLeft = (translateX === paddingLeft);
    const disabledRight = (maxTx >= translateX);

    console.log(widthTabs);

    return (
      <div className="NavSlider">
        <div ref={(DOM) => {
          this.swiper = DOM;
        }}
        className={`hammer ${hasTabs ? 'hasTabs' : ''}`}
        >
          <ul className="tabs"
            ref={(DOM) => {this.tabs = DOM}}
            style={{
              width: widthTabs || 'auto',
              transform: `translateX(${translateX}px)`,
            }}>
            {this.props.children}
          </ul>
          <button disabled={disabledLeft}
            className="btnSwipePrev"
            style={{width: paddingLeft}}
            onClick={this.prevSlide.bind(this)}>
            ⇠
          </button>
          <button disabled={disabledRight}
            className="btnSwipeNext"
            style={{width: paddingRight}}
            onClick={this.nextSlide.bind(this)}>
            ⇢
          </button>
        </div>
      </div>
    )
  }
}

NavigationHammer.defaultProps = {
  step: 150,
  paddingLeft: 30,
  paddingRight: 30,
};

NavigationHammer.propTypes = {
  step: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
}

export default NavigationHammer;
