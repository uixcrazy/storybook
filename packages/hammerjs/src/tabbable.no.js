import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hammerjs from 'hammerjs';

// dont have autoSwitchTab

export default function makeTabbableWidget(Widget) {
  class TabbableWidget extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeSlide: 0,
        slideCount: 0,
        translateX: 0,
        hasTabs: false,
        widthTabs: null,
        widthSwiper: null,
        widthEachSlide: [],
        posEachSlidePrev: [],
        posEachSlideNext: [],
        maxTx: null,
      };
      this.changeTab = this.changeTab.bind(this);
    }

    componentDidMount() {
      setTimeout(() => {
        this.updateUI();
      }, 500);
      window.addEventListener('resize', () => {
        this.updateUI();
      });
    }

    componentWillUnmount() {
      window.removeEventListener('resize', () => {
        this.updateUI();
      });
    }

    updateUI() {
      const widthTabs = this.getWidthTabs();
      const widthSwiper = this.tabsElement && this.tabsElement.clientWidth;
      const { paddingLeft, paddingRight } = this.props;
      if (this.state.widthTabs !== widthTabs || this.state.widthSwiper !== widthSwiper) {
        if (widthSwiper < widthTabs) {
          const {
            slideCount,
            widthEachSlide,
            posEachSlideNext,
          } = this.getWidthEachSlide();
          const maxTx = -(widthTabs - (widthSwiper - paddingRight));
          const posEachSlidePrev =
            this.getPosEachSlidePrev(widthEachSlide, posEachSlideNext, maxTx);
          this.createSlider();
          this.setState({
            activeSlide: 0,
            slideCount,
            widthEachSlide,
            posEachSlidePrev,
            posEachSlideNext,
            translateX: paddingLeft,
            hasTabs: true,
            widthTabs,
            widthSwiper,
            maxTx,
          });
        } else {
          this.setState({
            slideCount: 0,
            widthEachSlide: [],
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
      if (listChildNodes && listChildNodes.length > 0) {
        const nodesArray = [].slice.call(listChildNodes);
        widthTabs = nodesArray.reduce((accumulator, currentNode) => (
          accumulator + currentNode.offsetWidth
        ), 0);
      }
      return widthTabs;
    }

    getPosEachSlidePrev(widthEachSlide, posEachSlideNext, maxTx) {
      const posEachSlidePrev = [];
      let i = 1;
      [].concat(posEachSlideNext).reduceRight((accumulator, currentValue, currentIndex) => {
        let pos = maxTx;
        if (currentValue >= maxTx) {
          pos = accumulator + widthEachSlide[widthEachSlide.length - i];
          i += 1;
        }
        const j = currentIndex - 1;
        if (j >= 0) posEachSlidePrev[j] = pos;
        return pos;
      }, maxTx);
      return posEachSlidePrev;
    }

    getWidthEachSlide() {
      const { paddingLeft } = this.props;
      const listChildNodes = this.tabs && this.tabs.childNodes;
      let widthTabs = 0;
      const posEachSlideNext = [];
      const widthEachSlide = [];
      let slideCount = 0;
      if (listChildNodes && listChildNodes.length > 0) {
        slideCount = listChildNodes.length;
        const nodesArray = [].slice.call(listChildNodes);
        widthTabs = nodesArray.reduce((accumulator, currentNode, currentIndex) => {
          const pos = (currentIndex === 0) ? paddingLeft : -(accumulator - paddingLeft);
          posEachSlideNext.push(pos);
          widthEachSlide.push(currentNode.offsetWidth);
          return accumulator + currentNode.offsetWidth;
        }, 0);
      }
      return { widthTabs, slideCount, widthEachSlide, posEachSlideNext };
    }

    createSlider() {
      const options = {
        threshold: 1,
        velocity: 0.1,
        preventDefault: true,
      };
      if (!this.state.mc) {
        const mc = new Hammerjs(this.tabsElement, options);
        this.setState({ mc });
        mc.on('swipeleft swiperight', (ev) => {
          ev.preventDefault();
          if (ev.type === 'swipeleft') {
            this.nextSlide();
          } else if (ev.type === 'swiperight') {
            this.prevSlide();
          }
        });
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
      return activeSlide;
    }

    prevSlide() {
      const { paddingLeft } = this.props;
      const {
        translateX,
        activeSlide,
        posEachSlidePrev,
      } = this.state;
      if (translateX < paddingLeft) {
        let crrActiveSlide = this.getActiveSlide(activeSlide - 1);
        if (posEachSlidePrev[crrActiveSlide] === translateX && crrActiveSlide > 0) {
          crrActiveSlide = this.getActiveSlide(crrActiveSlide - 1);
        }
        const newTranslateX =
          (posEachSlidePrev[crrActiveSlide] < paddingLeft) && (activeSlide !== 0)
            ? posEachSlidePrev[crrActiveSlide] : paddingLeft;
        // if (newTranslateX < translateX) {
        //   console.log('OMB');
        // }
        this.setState({
          activeSlide: crrActiveSlide,
          translateX: newTranslateX,
        });
      }
    }

    nextSlide() {
      const {
        translateX,
        activeSlide,
        posEachSlideNext,
        maxTx,
      } = this.state;
      if (maxTx < translateX) {
        const crrActiveSlide = this.getActiveSlide(activeSlide + 1);
        this.setState({
          activeSlide: crrActiveSlide,
          translateX: (posEachSlideNext[crrActiveSlide] > maxTx)
            ? posEachSlideNext[crrActiveSlide] : maxTx,
        });
      }
    }

    goToSlide(number) {
      console.log(number);
      this.setState({
        activeSlide: number,
        translateX: this.state.posEachSlideNext[number],
      });
    }

    checkActiveTabHidden(index) {
      const {
        paddingLeft,
        paddingRight,
      } = this.props;
      const {
        widthSwiper,
        translateX,
        posEachSlideNext,
        widthEachSlide,
      } = this.state;

      const realWidthSlider = widthSwiper - paddingLeft - paddingRight;
      const opencastNext = realWidthSlider + (posEachSlideNext[index] - translateX);
      // realWidthSlider
      // + ((posEachSlideNext[index] - (translateX - paddingLeft))
      // - paddingLeft);
      const opencastPrev = -(
        (posEachSlideNext[index] - paddingLeft)
        - (widthEachSlide[index] + (translateX - paddingLeft)));

      if (widthEachSlide[index] > opencastNext) {
        console.log('%c Overlap at Right ', 'background: #222; color: #bada55');
        console.log(opencastNext);
        this.nextSlide();
      }

      if (widthEachSlide[index] > opencastPrev) {
        console.log('%c overlap at Left', 'background: #222; color: #bada55');
        console.log(opencastPrev, index);
        // this.prevSlide();
        this.goToSlide(index);
      }
    }

    changeTab(id, name, index) {
      const {
        portfolio,
        tabs,
      } = this.props;

      const isActive = portfolio && tabs[index]
        && this.props.portfolio === tabs[index].id;
      if (isActive) {
        console.log('Again');
      } else {
        this.checkActiveTabHidden(index);
      }
      // }, 300);
    }

    render() {
      const {
        tabs,
        paddingLeft,
        paddingRight,
      } = this.props;
      const {
        translateX,
        widthTabs,
        hasTabs,
        maxTx,
      } = this.state;
      const disabledLeft = (translateX === paddingLeft);
      const disabledRight = (maxTx >= translateX);
      return (
        <div className="tabbable-widget">
          {tabs && (
            <div className="tabs-wrapper"> {/* NavSlider */}
              <div ref={(DOM) => {
                this.tabsElement = DOM;
              }}
              className={`hammer ${hasTabs ? 'has-tabs' : ''}`}
              >
                <ul className="tabs"
                  ref={(DOM) => { this.tabs = DOM; }}
                  style={{
                    width: widthTabs || 'auto',
                    transform: `translateX(${hasTabs ? translateX : 0}px)`,
                    display: 'flex',
                  }}>
                  {tabs.map((tab, index) => {
                    const isActive = this.props.portfolio && this.props.portfolio === tab.id ? 'tab-active' : '';
                    const tabClass = `tab-item tab-${tab.id} ${isActive}`;
                    return (
                      <li
                        key={tab.id}
                        onClick={() => {
                          this.changeTab(tab.id, tab.name, index);
                        }}
                        style={{ flexShrink: 0 }}
                        className={tabClass}>
                        {tab.name}
                      </li>
                    );
                  })}
                </ul>
                <button
                  disabled={disabledLeft}
                  className="previous-btn tab-nav"
                  style={{ width: paddingLeft }}
                  onClick={this.prevSlide.bind(this)}>
                  <span data-icon="&#xe018;" className="icon" />
                </button>
                <button
                  disabled={disabledRight}
                  className="next-btn tab-nav"
                  style={{ width: paddingRight }}
                  onClick={this.nextSlide.bind(this)}>
                  <span data-icon="&#xe017;" className="icon" />
                </button>
              </div>
            </div>
          )}
          <Widget {...this.props} />
        </div>
      );
    }
  }

  TabbableWidget.defaultProps = {
    paddingLeft: 26,
    paddingRight: 26,
  };

  TabbableWidget.propTypes = {
    tabs: PropTypes.array,
    portfolio: PropTypes.number,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
  };

  return TabbableWidget;
}
