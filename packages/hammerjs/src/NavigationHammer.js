import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hammerjs from 'hammerjs';

import './NavigationHammer.css';

class NavigationHammer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      slideCount: 0,
      translateX: 0,
      hasTabs: false,
      widthTabs: null,
      widthSwiper: null,
      posEachSlide: [],
      widthEachSlide: [],
      maxTx: null,
    };
    this.createSlider = this.createSlider.bind(this);
  }

  componentDidMount() {
    this.updateUI();
    window.addEventListener('resize', () => {
      this.updateUI();
    });
  }

  componentDidUpdate() {
    this.updateUI();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.updateUI();
    });
  }

  updateUI() {
    const { widthTabs, widthEachSlide, slideCount, posEachSlide } = this.getWidthTabs();
    const widthSwiper = this.swiper && this.swiper.clientWidth;
    const { paddingRight } = this.props;
    if (this.state.widthTabs !== widthTabs || this.state.widthSwiper !== widthSwiper) {
      if (widthSwiper < widthTabs) {
        const maxTx = -(widthTabs - widthSwiper + paddingRight);
        this.createSlider();
        this.setState({
          activeSlide: 0,
          slideCount,
          translateX: posEachSlide[0],
          posEachSlide,
          hasTabs: true,
          widthTabs,
          widthSwiper,
          widthEachSlide,
          maxTx
        });
      } else {
        this.setState({
          slideCount,
          hasTabs: false,
          widthTabs,
          widthSwiper,
        });
      }
    }
  }

  getWidthTabs() {
    const { paddingLeft } = this.props;
    const listChildNodes = this.tabs && this.tabs.childNodes;
    let widthTabs = 0;
    let posEachSlide = [];
    let widthEachSlide = [];
    // let widthEachSlide2 = [];
    let slideCount = 0;
    if (listChildNodes && listChildNodes.length > 0) {
      slideCount = listChildNodes.length;
      var nodesArray = [].slice.call(listChildNodes);
      widthTabs = nodesArray.reduce((accumulator, currentNode, currentIndex) => {
        const pos = (currentIndex === 0) ? paddingLeft : - (accumulator - paddingLeft);
        posEachSlide.push(pos);
        // widthEachSlide2.push(currentNode.offsetWidth);
        return accumulator + currentNode.offsetWidth;
      }, 0);
      widthEachSlide = nodesArray.map(currentNode => {
        return currentNode.offsetWidth;
      });
    }

    console.log(widthEachSlide);
    return { widthTabs, slideCount, widthEachSlide, posEachSlide };
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

      // this.updateTranslateX(ev.deltaX); // not good for USER
      // if (ev.type === 'swipeleft') {
      //   this.nextSlide();
      // } else if (ev.type === 'swiperight') {
      //   this.prevSlide();
      // }
      if (ev.type === 'swipeleft') {
        console.log('swipeleft');
        this.goToSlide(this.state.activeSlide + 1);
      } else if (ev.type === 'swiperight') {
        this.goToSlide(this.state.activeSlide - 1);
      }
    });
  }

  // updateTranslateX(distance) {
  //   const _distance = distance || this.props.step;
  //   const { paddingLeft } = this.props;
  //   const { translateX, maxTx } = this.state;
  //   if (translateX < paddingLeft || maxTx < translateX) {
  //     let newTranslateX = translateX + _distance;

  //     if (newTranslateX >= paddingLeft) {
  //       newTranslateX = paddingLeft;
  //     }

  //     if (newTranslateX <= maxTx) {
  //       newTranslateX = maxTx;
  //     }
  //     this.setState({
  //       translateX: newTranslateX,
  //     });
  //   }
  // }

  goToSlide(number) {
    const { slideCount, maxTx, translateX, posEachSlide } = this.state;
    let newTranslateX = null;
    let activeSlide = null;
    if (number < 0) {
      activeSlide = 0;
    } else if (number > slideCount - 1) {
      activeSlide = slideCount - 1;
    } else {
      activeSlide = number;
    }


    console.log(posEachSlide[activeSlide], maxTx, posEachSlide[this.state.activeSlide])

    // if (posEachSlide[activeSlide] > maxTx > posEachSlide[this.state.activeSlide]) {
    //   console.log('last slider. We next two slide');
    // }

    newTranslateX = (posEachSlide[activeSlide] > maxTx) ? posEachSlide[activeSlide] : maxTx;
    if (newTranslateX !== translateX) {
      this.setState({ activeSlide, translateX: newTranslateX });


      console.log(activeSlide, posEachSlide, maxTx, newTranslateX);
    }
  }

  // prevSlide() {
  //   const { step, paddingLeft } = this.props;
  //   const { translateX } = this.state;
  //   if (translateX < paddingLeft) {
  //     const newTranslateX = translateX + step;
  //     this.setState({
  //       translateX: (newTranslateX < paddingLeft) ? newTranslateX : paddingLeft,
  //     });
  //   }
  // }

  // nextSlide() {
  //   const { step } = this.props;
  //   const { translateX, maxTx } = this.state;
  //   if (maxTx < translateX) {
  //     const newTranslateX = translateX - step;
  //     this.setState({
  //       translateX: (newTranslateX > maxTx) ? newTranslateX : maxTx,
  //     });
  //   }
  // }

  render() {
    const {
      paddingLeft,
      paddingRight,
    } = this.props;
    const {
      translateX,
      activeSlide,
      slideCount,
      widthTabs,
      hasTabs,
      // posEachSlide,
      maxTx
    } = this.state;
    // const disabledLeft = (translateX === paddingLeft);
    // const disabledRight = (maxTx >= translateX);
    const disabledLeft = activeSlide === 0;
    const disabledRight = (activeSlide === (slideCount - 1)) || (maxTx >= translateX);

    return (
      <div className="NavSlider">
        <div ref={(DOM) => {
          this.swiper = DOM;
        }}
          className={`hammer ${hasTabs ? 'hasTabs' : ''}`}
        >
          <ul className="tabs"
            ref={(DOM) => { this.tabs = DOM }}
            style={{
              width: widthTabs || 'auto',
              transform: `translateX(${hasTabs ? translateX : 0}px)`,
            }}>
            {this.props.children}
          </ul>
          <button
            disabled={disabledLeft}
            className="btnSwipePrev"
            style={{ width: paddingLeft }}
            onClick={this.goToSlide.bind(this, activeSlide - 1)}
            // onClick={this.prevSlide.bind(this)}
            >
            ⇠
          </button>
          <button
            disabled={disabledRight}
            className="btnSwipeNext"
            style={{ width: paddingRight }}
            onClick={this.goToSlide.bind(this, activeSlide + 1)}
            // onClick={this.nextSlide.bind(this)}
            >
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
