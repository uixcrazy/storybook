import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Hammerjs from 'hammerjs';
import styles from './HammerSlider.style';

class HammerSlider extends Component {
  static propTypes = {
    classes: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.element),
  }
  state = {
    data: this.props.data,
    activeSlide: 0,
    slideCount: this.props.data ? this.props.data.length : null,
  };

  // componentDidMount() {
  //   this.createSlider();
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    // It can return an object to update state,
    // or null to indicate that the new props do not require any state updates.
    if (nextProps.data !== prevState.data) {
      return {
        data: nextProps.data,
        slideCount: nextProps.data ? nextProps.data.length : null,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      this.createSlider();
    }
  }

  componentWillUnmount() {
    console.log('%c componentWillUnmount', 'background: #222; color: #bada55');
    if (this.mc) this.mc.destroy();
    this.stopAutoChange();
  }

  // handleChange = e => {
  //   this.setState({ text: e.target.value })
  // }

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
          this.goToSlide(this.state.activeSlide + 1);
        } else if (ev.type === 'swiperight') {
          this.goToSlide(this.state.activeSlide - 1);
        }
      });
      this.autoChangeNext();
    }
  }

  stopAutoChange() {
    if (this.autoSlide) clearInterval(this.autoSlide);
  }

  autoChangeNext() {
    this.stopAutoChange();
    this.autoSlide = setInterval(() => {
      const { activeSlide, slideCount } = this.state;
      if (activeSlide < slideCount - 1) {
        this.goToSlide(activeSlide + 1);
      } else {
        this.goToSlide(0);
      }
    }, 10000);
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
    const { classes } = this.props;
    const {
      data,
      activeSlide,
      slideCount,
    } = this.state;
    const percentage = -(100 / slideCount) * activeSlide;
    const disabledLeft = activeSlide === 0;
    const disabledRight = activeSlide === (slideCount - 1);
    return data && data.length > 0 ?
      (
        <div
          ref={(DOM) => {
            this.swiper = DOM;
          }}
          className={classes.hammer}
          onMouseEnter={() => {
            this.stopAutoChange();
          }}
          onMouseLeave={() => {
            this.autoChangeNext();
          }}>
          <div
            className={classes.slider}
            style={{
              width: `${slideCount * 100}%`,
              transform: `translateX(${percentage}%)`,
            }}>
            {
              data.map((item, index) => (
                <div className={classes.slide} key={index}>
                  {item}
                </div>
              ))
            }
          </div>
          <button
            disabled={disabledLeft}
            className={classes.btnPrev}
            onClick={() => {
              this.goToSlide(activeSlide - 1);
              this.autoChangeNext();
            }}>
            ⇠
          </button>
          <button
            disabled={disabledRight}
            className={classes.btnNext}
            onClick={() => {
              this.goToSlide(activeSlide + 1);
              this.autoChangeNext();
            }}>
            ⇢
          </button>
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
                  onClick={() => {
                    this.goToSlide(index);
                    this.autoChangeNext();
                  }}>
                  <span className={classes.circleBadge}/>
                </button>
              ))
            }
          </div>
        </div>
      ) : null;
  }
}

export default injectSheet(styles)(HammerSlider);
