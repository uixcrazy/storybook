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
    speed: 500,
    infiniteLoop: false,
    showDots: true,
    showBtnNextPrev: true,
  }

  state = {
    activeIndex: 0,
    newIndex: null,
    oldIndex: null,
    direction: 'left', // left - right
    data: this.props.data,
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
        sliderWidth: this.slider.clientWidth,
      };
    }
    return null;
  }

  componentDidMount() {
    this.updateDimensions();
  }

  componentDidUpdate() { // prevProps, prevState, snapshot
    const { newIndex } = this.state;
    if (newIndex !== null) {
      this.goToSlide(newIndex);
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
    const { slideCount } = this.state;
    let _activeSlide = stt; // eslint-disable-line no-underscore-dangle
    if (stt < 0) {
      _activeSlide = infiniteLoop ? slideCount - 1 : 0;
    } else if (stt > slideCount - 1) {
      _activeSlide = infiniteLoop ? 0 : slideCount - 1;
    }
    this.setState(prevState => ({
      activeIndex: _activeSlide,
      newIndex: null,
      oldIndex: prevState.activeIndex,
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
  }

  renderSlider() {
    const { classes, speed } = this.props;
    const {
      data,
      activeIndex,
      direction,
      sliderWidth,
      oldIndex,
      // newIndex
    } = this.state;
    console.log(oldIndex, activeIndex, direction);
    return (
      <div
        className={classes.slider}>
        {
          data.map((item, index) => {
            let leftP = null;
            let transition = null;
            switch (index) {
              case oldIndex:
                leftP = (direction === 'left') ? `-${sliderWidth}px` : `${sliderWidth}px`;
                transition = `left ${speed}ms linear`;
                break;
              case activeIndex:
                leftP = 0;
                transition = `left ${speed}ms linear`;
                break;
              default:
                leftP = (direction === 'left') ? `${sliderWidth}px` : `-${sliderWidth}px`;
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
            );
          })
        }
      </div>
    );
  }

  renderBtnNextPrev() {
    const { classes } = this.props;
    const {
      activeIndex,
    } = this.state;
    return (
      <Fragment>
        <button
          className={classes.btnPrev}
          onClick={debounce(() => {
            this.onSlidePrev(activeIndex - 1);
          }, 250)}>
          ⇠
        </button>
        <button
          className={classes.btnNext}
          onClick={debounce(() => {
            this.onSlideNext(activeIndex + 1);
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
      activeIndex,
      slideCount
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
