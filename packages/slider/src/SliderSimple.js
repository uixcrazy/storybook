import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Hammerjs from 'hammerjs';
import { withStyles } from '../../../utils/withStyles';
import debounce from 'lodash.debounce';
import defaultStyles from './SliderSimple.style';

export class SliderSimple extends Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.element),
    easing: PropTypes.string,
    speed: PropTypes.number,
    infiniteLoop: PropTypes.bool,
    showDots: PropTypes.bool,
    showBtnNextPrev: PropTypes.bool,
    autoplay: PropTypes.bool,
    swipeEnabled: PropTypes.bool,
    autoplaySpeed: PropTypes.number,
  }

  static defaultProps = {
    easing: 'linear',
    // linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)
    speed: 500,
    infiniteLoop: false,
    showDots: true,
    showBtnNextPrev: true,
    autoplay: true,
    swipeEnabled: true,
    autoplaySpeed: 4500,
  }

  state = {
    activeIndex: 0,
    newIndex: null,
    oldIndex: null,
    direction: 'left', // left - right
    data: this.props.data,
    slideCount: this.props.data ? this.props.data.length : null,
    sliderWidth: 0,
    autoplay: this.props.autoplay,
    infiniteLoopAutoplay: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // It can return an object to update state,
    // or null to indicate that the new props do not require any state updates.
    if (nextProps.data !== prevState.data) {
      return {
        data: nextProps.data,
        slideCount: nextProps.data ? nextProps.data.length : null,
        sliderWidth: this.slider.clientWidth,
      };
    }
    if (nextProps.autoplay !== prevState.autoplay) {
      return {
        autoplay: nextProps.autoplay,
      };
    }
    return null;
  }

  componentWillUnmount() {
    console.log('%c componentWillUnmount', 'background: #222; color: #bada55');
    // if (this.mc) this.mc.destroy(); hammer
    this.stopAuto();
    window.removeEventListener('resize', this.updateDimensions());
  }

  componentDidMount() {
    this.updateDimensions();
    this.startAuto();
    this.createSwipe();
    window.addEventListener('resize', this.updateDimensions());
  }

  componentDidUpdate(prevProps, prevState) { // prevProps, prevState, snapshot
    const { newIndex, autoplay } = this.state;
    if (newIndex !== null) {
      setTimeout(() => {
        this.goToSlide(newIndex);
      }, 0);
    }
    if (autoplay !== prevState.autoplay) {
      this.startAuto();
    }
  }

  updateDimensions() {
    this.setState({
      sliderWidth: this.slider.clientWidth,
    });
  }

  goToSlide(stt) {
    const {
      infiniteLoop,
    } = this.props;
    const { slideCount, infiniteLoopAutoplay } = this.state;
    let _activeSlide = stt; // eslint-disable-line no-underscore-dangle
    if (stt < 0) {
      _activeSlide = infiniteLoop ? slideCount - 1 : 0;
    } else if (stt > slideCount - 1) {
      _activeSlide = (infiniteLoop || infiniteLoopAutoplay) ? 0 : slideCount - 1;
    }
    this.setState(prevState => ({
      newIndex: null,
      oldIndex: prevState.activeIndex,
      activeIndex: _activeSlide,
    }));
  }

  onSlideNext(newIndex) {
    const { slideCount } = this.state;
    let isNext = true;
    if (!this.props.infiniteLoop && newIndex >= slideCount) {
      isNext = false;
    }
    // Right to Left   ⟵
    if (this.state.newIndex === null && isNext) {
      this.setState({
        newIndex,
        oldIndex: null,
        direction: 'left',
        infiniteLoopAutoplay: false,
      });
    }
  }

  onSlidePrev(newIndex) {
    let isPrev = true;
    if (!this.props.infiniteLoop && newIndex < 0) {
      isPrev = false;
    }
    // Left to Right   ⟶
    if (this.state.newIndex === null && isPrev) {
      this.setState({
        newIndex,
        oldIndex: null,
        direction: 'right',
        infiniteLoopAutoplay: false,
      });
    }
  }

  handleClick(stt) {
    const { activeIndex } = this.state;
    if (stt > activeIndex) {
      this.onSlideNext(stt);
    }
    if (stt < activeIndex) {
      this.onSlidePrev(stt);
    }
    this.startAuto(); // reset
  }

  stopAuto() {
    if (this.autoSlide) clearInterval(this.autoSlide);
  }

  startAuto() { // autoChangeNext
    if (this.state.autoplay === true) {
      this.stopAuto();
      this.autoSlide = setInterval(() => {
        const { activeIndex } = this.state;
        // Right to Left   ⟵
        if (this.state.newIndex === null) {
          this.setState({
            infiniteLoopAutoplay: true,
            newIndex: activeIndex + 1,
            oldIndex: null,
            direction: 'left',
          });
        }
      }, this.props.autoplaySpeed);
    }
  }

  createSwipe() {
    if (this.slider && this.props.swipeEnabled) {
      const options = {
        // direction: Hammerjs.DIRECTION_ALL, // swipeup swipedown
        threshold: 1,
        velocity: 0.1,
        preventDefault: true,
      };
      this.mc = new Hammerjs(this.slider, options);
      this.mc.on('swipeleft swiperight', (ev) => {
        ev.preventDefault();
        if (ev.type === 'swipeleft') {
          this.onSlideNext(this.state.activeIndex + 1);
        } else if (ev.type === 'swiperight') {
          this.onSlidePrev(this.state.activeIndex - 1);
        }
        this.startAuto();
      });
    }
  }

  renderSlider() {
    const {
      classes,
      speed,
      easing,
    } = this.props;
    const {
      data,
      activeIndex,
      direction,
      sliderWidth,
      oldIndex,
      newIndex,
    } = this.state;
    const leftPosition = (direction === 'left') ? sliderWidth : -sliderWidth;
    const transition = newIndex === null ? `left ${speed}ms ${easing}` : 'none';
    return (
      <div
        className={classes.slider}>
        {
          data.map((item, index) => {
            let leftP = `${leftPosition}px`;
            let zIndex = 1;
            switch (index) {
              case oldIndex:
                leftP = `${-leftPosition}px`;
                break;
              case activeIndex:
                leftP = 0;
                zIndex = 2;
                break;
              default:
            }
            return (
              <div
                className={classes.slide} key={index}
                style={
                  {
                    left: leftP,
                    transition,
                    zIndex,
                  }
                }>
                {item}
              </div>
            );
          })
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
    const disabledLeft = !infiniteLoop && activeIndex === 0;
    const disabledRight = !infiniteLoop && activeIndex === (slideCount - 1);
    return (
      <Fragment>
        <button
          disabled={disabledLeft}
          className={classes.btnPrev}
          onClick={debounce(() => {
            this.onSlidePrev(activeIndex - 1);
            this.startAuto();
          }, 250)}>
          ⇠
        </button>
        <button
          disabled={disabledRight}
          className={classes.btnNext}
          onClick={debounce(() => {
            this.onSlideNext(activeIndex + 1);
            this.startAuto();
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
      easing,
    } = this.props;
    const {
      activeIndex,
      slideCount,
    } = this.state;
    return (
      <div className={classes.pagination}>
        {
          [...Array(slideCount)].map((item, index) => (
            <button
              key={index}
              disabled={activeIndex === index}
              className={
                activeIndex === index
                  ? classes.btnBadgeActive
                  : classes.btnBadge
              }
              style={{
                transition: `backgroundColor ${speed / 2}ms ${easing} ${speed / 2}ms`,
              }}
              onClick={() => {
                this.handleClick(index);
              }}>
              <span className={classes.circleBadge}/>
            </button>
          ))
        }
      </div>
    );
  }

  render() {
    const {
      classes,
      showDots,
      showBtnNextPrev,
    } = this.props;
    const { data } = this.state;
    return data && data.length > 0
      ? <div
        ref={(DOM) => {
          this.slider = DOM;
        }}
        className={classes.wrapper}
        onMouseEnter={() => {
          this.stopAuto();
        }}
        onMouseLeave={() => {
          this.startAuto();
        }}>
        {this.renderSlider()}
        {showBtnNextPrev && this.renderBtnNextPrev()}
        {showDots && this.renderDots()}
      </div>
      : null;
  }
}

export default withStyles(defaultStyles, SliderSimple);
