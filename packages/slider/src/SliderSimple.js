import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { debounce } from '../../../assets/third-party/throttle-debounce';
import styles from './SliderSimple.style';

class SliderSimple extends Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.element),
    speed: PropTypes.number,
    infiniteLoop: PropTypes.bool,
    showDots: PropTypes.bool,
    showBtnNextPrev: PropTypes.bool,
    // easing
    // autoplay
    // autoplaySpeed
  }
  static defaultProps = {
    infiniteLoop: false,
    showDots: true,
    showBtnNextPrev: true,
    speed: 500,
  }
  state = {
    data: this.props.data,
    activeSlide: 0,
    crrSlide: null,
    prevSlide: null,
    direction: 'left', // left - right
    slideCount: this.props.data ? this.props.data.length : null,
    sliderWidth: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // It can return an object to update state,
    // or null to indicate that the new props do not require any state updates.
    if (nextProps.data !== prevState.data) {
      return {
        data: nextProps.data,
        slideCount: nextProps.data ? nextProps.data.length : null,
        sliderWidth: this.slider.offsetWidth,
      };
    }
    return null;
  }

  componentDidMount() {
    this.updateDimensions();
  }

  componentDidUpdate() { // prevProps, prevState
    const { crrSlide } = this.state;
    if (crrSlide !== null) {
      this.goToSlide(crrSlide);
    }
  }

  updateDimensions() {
    this.setState({
      sliderWidth: this.slider.clientWidth,
    });
  }

  goToSlide(stt) {
    const {
      infiniteLoop
    } = this.props;
    const { activeSlide, slideCount } = this.state;
    let newActiveSlide = null;
    if (stt < 0) {
      newActiveSlide = infiniteLoop ? slideCount - 1 : 0;
    } else if (stt > slideCount - 1) {
      newActiveSlide = infiniteLoop ? 0 : slideCount - 1;
    } else {
      newActiveSlide = stt;
    }
    this.setState({
      activeSlide: newActiveSlide,
      crrSlide: null,
      prevSlide: activeSlide,
    });
  }

  goToNextSlide(stt) {
    const { slideCount } = this.state;
    let isNext = true;
    if (!this.props.infiniteLoop && stt >= slideCount) {
      isNext = false;
    }
    // Right to Left   ⟵
    if (this.state.crrSlide === null && isNext) {
      this.setState({
        crrSlide: stt,
        prevSlide: null,
        direction: 'left',
      });
    }
  }

  goToPrevSlide(stt) {
    let isPrev = true;
    if (!this.props.infiniteLoop && stt < 0) {
      isPrev = false;
    }
    // Left to Right   ⟶
    if (this.state.crrSlide === null && isPrev) {
      this.setState({
        crrSlide: stt,
        prevSlide: null,
        direction: 'right',
      });
    }
  }

  handleClick(stt) {
    const { activeSlide } = this.state;
    if (stt>activeSlide) {
      this.goToNextSlide(stt);
    }
    if (stt<activeSlide) {
      this.goToPrevSlide(stt);
    }
  }

  renderSlider() {
    const { classes, speed } = this.props;
    const {
      data,
      activeSlide,
      crrSlide,
      direction,
      sliderWidth,
      prevSlide,
    } = this.state;
    return (
      <div
        className={classes.slider}>
        {
          data.map((item, index) => {
            let leftP = (direction === 'left') ? `${sliderWidth}px` : `-${sliderWidth}px`;
            let transition = `left ${speed}ms linear`;
            switch(index) {
            case crrSlide:
              transition = 'none';
              break;
            case activeSlide:
              leftP = 0;
              break;
            case prevSlide:
              leftP = (direction === 'left') ? `-${sliderWidth}px` : `${sliderWidth}px`;
              break;
            default:
              transition = 'none';
            }
            return (
              <div
                className={classes.slide} key={index}
                style={
                  {
                    left: leftP,
                    transition,
                  }
                }>
                {item}
              </div>
            )
          })
        }
      </div>
    )
  }

  renderBtnNextPrev() {
    const { classes } = this.props;
    const {
      activeSlide,
    } = this.state;
    return (
      <Fragment>
        <button
          className={classes.btnPrev}
          onClick={debounce(() => {
            this.goToPrevSlide(activeSlide - 1);
          }, 250)}>
          ⇠
        </button>
        <button
          className={classes.btnNext}
          onClick={debounce(() => {
            this.goToNextSlide(activeSlide + 1);
          }, 250)}>
          ⇢
        </button>
      </Fragment>
    );
  }

  renderDots() {
    const {
      classes,
      speed,
    } = this.props;
    const {
      activeSlide,
      slideCount
    } = this.state;
    return (
      <div className={classes.pagination}>
        {
          [...Array(slideCount)].map((item, index) => (
            <button
              key={index}
              disabled={activeSlide === index}
              className={
                activeSlide === index
                  ? classes.btnBadgeActive
                  : classes.btnBadge
              }
              style={{
                transition: `backgroundColor ${speed/2}ms linear ${speed/2}ms`,
              }}
              onClick={() => {
                this.handleClick(index);
              }}>
              <span className={classes.circleBadge}/>
            </button>
          ))
        }
      </div>
    )
  }

  render() {
    const {
      classes,
      showDots,
      showBtnNextPrev,
    } = this.props;
    const { data } = this.state;
    return data && data.length > 0 ?
      (
        <div
          ref={(DOM) => {
            this.slider = DOM;
          }}
          className={classes.wrapper}>
          {this.renderSlider()}
          {showBtnNextPrev && this.renderBtnNextPrev()}
          {showDots && this.renderDots()}
        </div>
      ) : null;
  }
}

export default injectSheet(styles)(SliderSimple);
