// implements Carousel
// CarouselSimple

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Hammerjs from 'hammerjs';
import { withStyles } from '../../../core/AddStyles';
import defaultStyles from './CarouselSimple.style';

class CarouselSimple extends Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.element),
    speed: PropTypes.number,
    infiniteLoop: PropTypes.bool,
    showDots: PropTypes.bool,
    showBtnNextPrev: PropTypes.bool,
    easing: PropTypes.string,
    autoplay: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
  }

  static defaultProps = {
    speed: 500,
    infiniteLoop: false,
    showDots: true,
    showBtnNextPrev: true,
    easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
    // linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)
    autoplay: true,
    autoplaySpeed: 4500,
  }

  state = this.initState(this.props);

  // componentDidMount() { this.createSlider(); }
  // handleChange = e => { this.setState({ text: e.target.value }) }

  static getDerivedStateFromProps(nextProps, prevState) {
    // It can return an object to update state,
    // or null to indicate that the new props do not require any state updates.
    if (nextProps.data !== prevState.data) {
      return this.initState(nextProps);
    }
    return null;
  }

  initState(props) {
    const rr = props.infiniteLoop ? 2 : 0;
    return {
      data: props.data,
      activeIndex: props.infiniteLoop ? 1 : 0,
      slideCount: props.data ? props.data.length : null,
      realSlideCount: props.data ? props.data.length + rr : null,
      transition: `transform ${props.speed}ms ${props.easing}`,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      this.createSlider();
    }
  }

  componentWillUnmount() {
    console.log('%c componentWillUnmount', 'background: #222; color: #bada55');
    if (this.mc) this.mc.destroy();
    this.stopAuto();
  }

  createSlider() {
    if (this.swiper) {
      const options = {
        // direction: Hammerjs.DIRECTION_ALL, // swipeup swipedown
        threshold: 10,
        velocity: 0.1,
        preventDefault: true,
      };
      this.mc = new Hammerjs(this.swiper, options);
      this.mc.on('swipeleft swiperight', (ev) => {
        ev.preventDefault();
        if (ev.type === 'swipeleft') {
          this.goToSlide(this.state.activeIndex + 1);
        } else if (ev.type === 'swiperight') {
          this.goToSlide(this.state.activeIndex - 1);
        }
      });
      // this.startAuto();
    }
  }

  stopAuto() {
    if (this.autoSlide) clearInterval(this.autoSlide);
  }

  onSlidePrev(activeIndex) {
    const { speed, infiniteLoop } = this.props;
    const { realSlideCount } = this.state;
    this.goToSlide(activeIndex - 1);
    if (infiniteLoop && activeIndex === 1) {
      setTimeout(() => {
        this.goToSlide(realSlideCount - 2, 'none');
        // this.startAuto();
      }, speed + 100);
    } else {
      // this.startAuto();
    }
  }

  onSlideNext(activeIndex) {
    const { speed, infiniteLoop } = this.props;
    const { realSlideCount } = this.state;
    this.goToSlide(activeIndex + 1);
    if (infiniteLoop && activeIndex === (realSlideCount - 2)) {
      setTimeout(() => {
        this.goToSlide(1, 'none');
        // this.startAuto();
      }, speed + 100);
    } else {
      // this.startAuto();
    }
  }

  startAuto() { // autoChangeNext
    this.stopAuto();
    this.autoSlide = setInterval(() => {
      const { activeIndex, slideCount } = this.state;
      if (activeIndex < slideCount - 1) {
        this.goToSlide(activeIndex + 1);
      } else {
        this.goToSlide(0);
      }
    }, this.props.autoplaySpeed);
  }

  goToSlide(number,
    transition = `transform ${this.props.speed}ms ${this.props.easing}`) {
    const { realSlideCount } = this.state;
    let activeIndex = null;
    if (number < 0) {
      activeIndex = 0;
    } else if (number > realSlideCount - 1) {
      activeIndex = realSlideCount - 1;
    } else {
      activeIndex = number;
    }
    this.setState({ activeIndex, transition });
  }

  handleClick(index) {
    this.goToSlide(index);
    // update transition có speed mới
    // this.startAuto();
  }

  renderSlider() {
    const {
      classes,
      infiniteLoop,
    } = this.props;
    const {
      data,
      activeIndex,
      realSlideCount,
      transition,
    } = this.state;
    const percentage = -(100 / realSlideCount) * activeIndex;
    return (
      <div
        className={classes.slider}
        style={{
          width: `${realSlideCount * 100}%`,
          transform: `translateX(${percentage}%)`,
          transition,
        }}>
        { infiniteLoop
          ? <div className={classes.slide}>
            {data[data.length - 1]}
          </div>
          : null
        }
        {
          data.map((item, index) => (
            <div className={classes.slide} key={index}>
              {item}
            </div>
          ))
        }
        { infiniteLoop
          ? <div className={classes.slide}>
            {data[0]}
          </div>
          : null
        }
      </div>
    );
  }

  renderBtnNextPrev() {
    const { classes, infiniteLoop } = this.props;
    const {
      activeIndex,
      slideCount,
    } = this.state;
    const rr = infiniteLoop ? 2 : 0;
    const disabledLeft = activeIndex === 0;
    const disabledRight = activeIndex === (slideCount - 1 + rr);
    return (
      <Fragment>
        <button
          disabled={disabledLeft}
          className={classes.btnPrev}
          onClick={() => {
            this.onSlidePrev(activeIndex);
          }}>
          ⇠
        </button>
        <button
          disabled={disabledRight}
          className={classes.btnNext}
          onClick={() => {
            this.onSlideNext(activeIndex);
          }}>
          ⇢
        </button>
      </Fragment>
    );
  }

  renderDots() {
    const {
      classes,
      speed,
      easing,
      infiniteLoop,
    } = this.props;
    const {
      activeIndex,
      realSlideCount,
    } = this.state;
    return (
      <div className={classes.pagination}>
        {
          [...Array(realSlideCount)].map((item, index) => {
            const klass = [classes.btnBadge];
            if (infiniteLoop && (index === 0 || index === (realSlideCount - 1))) {
              klass.push(classes.hide);
            }
            return (
              <button
                key={index}
                disabled={activeIndex === index}
                className={
                  activeIndex === index
                    ? classes.btnBadgeActive
                    : klass.join(' ')
                }
                style={{
                  transition: `backgroundColor ${speed / 2}ms ${easing} ${speed / 2}ms`,
                }}
                onClick={() => {
                  this.handleClick(index);
                }}>
                <span className={classes.circleBadge}/>
              </button>
            );
          })
        }
      </div>
    );
  }

  render() {
    const {
      classes,
      showBtnNextPrev,
      showDots,
    } = this.props;
    const { data } = this.state;
    return data && data.length > 0
      ? <div
        ref={(DOM) => {
          this.slider = DOM;
        }}
        className={classes.hammer}
        // onMouseEnter={() => {
        //   this.stopAuto();
        // }}
        // onMouseLeave={() => {
        //   this.startAuto();
        // }}
      >
        {this.renderSlider()}
        {showBtnNextPrev && this.renderBtnNextPrev()}
        {showDots && this.renderDots()}
      </div>
      : null;
  }
}

export default withStyles(CarouselSimple, defaultStyles);
