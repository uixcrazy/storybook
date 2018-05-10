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
      posEachSlidePrev: [],
      posEachSlideNext: [],
      widthEachSlide: [],
      maxTx: null,
    };
    this.createSlider = this.createSlider.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.updateUI();
    }, 500);
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
    const widthTabs = this.getWidthTabs();
    const widthSwiper = this.swiper && this.swiper.clientWidth;
    const { paddingLeft, paddingRight } = this.props;
    if (this.state.widthTabs !== widthTabs || this.state.widthSwiper !== widthSwiper) {
      console.log('AAA');
      if (widthSwiper < widthTabs) {
        const {
          // widthTabs,
          slideCount,
          widthEachSlide,
          posEachSlideNext
        } = this.getWidthEachSlide();
        const maxTx = -(widthTabs - widthSwiper + paddingRight);
        const posEachSlidePrev =
          this.getPosEachSlidePrev(widthEachSlide, posEachSlideNext, maxTx);
        console.log(posEachSlidePrev);



        // this.createSlider();
        this.setState({
          activeSlide: 0,
          slideCount,
          posEachSlideNext,
          translateX: paddingLeft,
          hasTabs: true,
          widthTabs,
          widthSwiper,
          widthEachSlide,
          maxTx
        });
      } else {
        this.setState({
          slideCount: 0,
          hasTabs: false,
          widthTabs,
          widthSwiper,
        });
      }
    }
  }

  getWidthTabs() {
    const listChildNodes = this.tabs && this.tabs.childNodes;
    let widthTabs = 0;
    // let posEachSlide = [];
    // let widthEachSlide = [];
    // let slideCount = 0;
    if (listChildNodes && listChildNodes.length > 0) {
      var nodesArray = [].slice.call(listChildNodes);
      widthTabs = nodesArray.reduce((accumulator, currentNode, currentIndex) => {
        // const pos = (currentIndex === 0) ? paddingLeft : - (accumulator - paddingLeft);
        // posEachSlide.push(pos);
        // widthEachSlide2.push(currentNode.offsetWidth);
        return accumulator + currentNode.offsetWidth;
      }, 0);
    }

    return widthTabs;
  }

  getPosEachSlidePrev(widthEachSlide, posEachSlideNext, maxTx) {
    // let posEachSlidePrev = [];
    const crr = [].concat(posEachSlideNext).reverse();
    // console.log(crr);
    const posEachSlidePrev = crr.map((currentValue, currentIndex) => {
      // const pos = (currentIndex === 0) ? paddingLeft : - (accumulator - paddingLeft);
      // posEachSlide.push(pos);
      // widthEachSlide2.push(currentNode.offsetWidth);
      const pos = (currentValue < maxTx)
        ? maxTx
        : currentValue + widthEachSlide[crr.length - currentIndex];
      // console.log(currentValue, currentIndex, widthEachSlide);
      return pos;
    });

    // console.log(posEachSlidePrev);
    return posEachSlidePrev.reverse();
  }

  getWidthEachSlide() {
    const { paddingLeft } = this.props;
    const listChildNodes = this.tabs && this.tabs.childNodes;
    let widthTabs = 0;
    let posEachSlideNext = [];
    let widthEachSlide = [];
    let slideCount = 0;
    if (listChildNodes && listChildNodes.length > 0) {
      slideCount = listChildNodes.length;
      var nodesArray = [].slice.call(listChildNodes);
      widthTabs = nodesArray.reduce((accumulator, currentNode, currentIndex) => {
        const pos = (currentIndex === 0) ? paddingLeft : - (accumulator - paddingLeft);
        posEachSlideNext.push(pos);
        widthEachSlide.push(currentNode.offsetWidth);
        return accumulator + currentNode.offsetWidth;
      }, 0);
    }
    return { widthTabs, slideCount, widthEachSlide, posEachSlideNext };
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
      if (ev.type === 'swipeleft') {
        this.nextSlide();
      } else if (ev.type === 'swiperight') {
        this.prevSlide();
      }
      // if (ev.type === 'swipeleft') {
      //   console.log('swipeleft');
      //   this.goToSlide(this.state.activeSlide + 1);
      // } else if (ev.type === 'swiperight') {
      //   this.goToSlide(this.state.activeSlide - 1);
      // }
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

  getActiveSlide(number) {
    const { slideCount } = this.state;
    let activeSlide = null;
    if (number < 0) {
      activeSlide = 0;
    } else if (number > slideCount - 1) {
      activeSlide = slideCount - 1;
    } else {
      activeSlide = number;
    }
    // this.setState({  });
    return activeSlide;
  }

  prevSlide() {
    const { paddingLeft } = this.props;
    const {
      translateX,
      activeSlide,
      widthEachSlide,
      posEachSlidePrev,
      maxTx
    } = this.state;

    if (translateX < paddingLeft) {
      const newTranslateX = translateX + widthEachSlide[activeSlide];
      const crrActiveSlide = this.getActiveSlide(activeSlide - 1);
      this.setState({
        activeSlide: crrActiveSlide,
        translateX: (newTranslateX < paddingLeft) ? newTranslateX : paddingLeft,
      });
    }
  }

  nextSlide() {
    const {
      translateX,
      activeSlide,
      // widthEachSlide,
      posEachSlideNext,
      maxTx
    } = this.state;
    if (maxTx < translateX) {
      // const newTranslateX = translateX - widthEachSlide[activeSlide];
      const crrActiveSlide = this.getActiveSlide(activeSlide + 1);

      console.log(posEachSlideNext, crrActiveSlide, maxTx);
      this.setState({
        activeSlide: crrActiveSlide,
        translateX: (posEachSlideNext[crrActiveSlide] > maxTx) ? posEachSlideNext[crrActiveSlide] : maxTx,
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
      // activeSlide,
      // slideCount,
      widthTabs,
      hasTabs,
      // posEachSlide,
      maxTx
    } = this.state;
    const disabledLeft = (translateX === paddingLeft);
    const disabledRight = (maxTx >= translateX);


    // const disabledLeft = activeSlide === 0;
    // const disabledRight = (activeSlide === (slideCount - 1)) || (maxTx >= translateX);

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
            // onClick={this.goToSlide.bind(this, activeSlide - 1)}
            onClick={this.prevSlide.bind(this)}>
            ⇠
          </button>
          <button
            disabled={disabledRight}
            className="btnSwipeNext"
            style={{ width: paddingRight }}
            // onClick={this.goToSlide.bind(this, activeSlide + 1)}
            onClick={this.nextSlide.bind(this)}>
            ⇢
          </button>
        </div>
      </div>
    )
  }
}

NavigationHammer.defaultProps = {
  // step: 150,
  paddingLeft: 30,
  paddingRight: 30,
};

NavigationHammer.propTypes = {
  // step: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
}

export default NavigationHammer;
