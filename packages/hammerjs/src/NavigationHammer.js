import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hammerjs from 'hammerjs';
import './NavigationHammer.css';

export default function makeTabs(Content) {
  class NavigationHammer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        itemSelected: this.props.defaultSelected,
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
      this.getWidthTabs = this.getWidthTabs.bind(this);
    }

    componentDidMount() {
      setTimeout(() => {
        this.updateUI();
      }, 500);
      window.addEventListener('resize', () => {
        this.updateUI();
      });
    }

    // componentDidUpdate() {
    //   this.updateUI(); // not resize on Browser
    // }

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
      return {
        widthTabs,
        slideCount,
        widthEachSlide,
        posEachSlideNext,
      };
    }

    createSlider() {
      const options = {
        // direction: Hammerjs.DIRECTION_ALL, // swipeup swipedown
        threshold: 1,
        velocity: 0.1,
        preventDefault: true,
      };
      if (!this.state.mc) {
        const mc = new Hammerjs(this.swiper, options);
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
        console.log('%c Overlap at Right -- phải tính lại', 'background: #222; color: #bada55');
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

    changeTab(id, label, index) {
      const { items } = this.props;
      const { itemSelected } = this.state;
      const isActive = items && items[index] && items[itemSelected].id === items[index].id;
      if (!isActive) {
        this.checkActiveTabHidden(index);
        this.setState({
          itemSelected: index,
        });
      }
    }

    render() {
      const {
        paddingLeft,
        paddingRight,
        items,
      } = this.props;
      const {
        itemSelected,
        translateX,
        widthTabs,
        hasTabs,
        maxTx,
      } = this.state;
      const disabledLeft = (translateX === paddingLeft);
      const disabledRight = (maxTx >= translateX);
      const finalWidthTabs = hasTabs ? widthTabs : '100%';
      return (
        <div className="TabsNavigation">
          <div className="NavSlider">
            <div ref={(DOM) => {
              this.swiper = DOM;
            }}
            className={`hammer ${hasTabs ? 'has-tabs' : 'notabs'}`}
            >
              <ul className="tabs"
                ref={(DOM) => { this.tabs = DOM; }}
                style={{
                  width: finalWidthTabs || 'auto',
                  transform: `translateX(${hasTabs ? translateX : 0}px)`,
                  display: 'flex', // style={{ flex: '1 0 auto' }} forChildren
                }}>
                {items.map((tab, index) => {
                  const isActive = items && items[index]
                    && items[itemSelected].id === items[index].id ? 'tab-active' : '';
                  const tabClass = `tab-item ${isActive}`;
                  return (
                    <li
                      key={tab.id}
                      onClick={() => {
                        this.changeTab(tab.id, tab.label, index);
                      }}
                      style={{ flexShrink: 0 }}
                      className={tabClass}>
                      {tab.label}
                    </li>
                  );
                })}
              </ul>
              <button
                disabled={disabledLeft}
                className="btn-prev"
                style={{ width: paddingLeft }}
                onClick={this.prevSlide.bind(this)}>
                ⇠
              </button>
              <button
                disabled={disabledRight}
                className="btn-next"
                style={{ width: paddingRight }}
                onClick={this.nextSlide.bind(this)}>
                ⇢
              </button>
            </div>
          </div>
          <Content
            // {...this.props}
            content={items[itemSelected].content} />
        </div>
      );
    }
  }

  NavigationHammer.defaultProps = {
    paddingLeft: 30,
    paddingRight: 30,
    defaultSelected: 0,
  };

  NavigationHammer.propTypes = {
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    // children: PropTypes.node.isRequired,
    items: PropTypes.array,
    defaultSelected: PropTypes.number,
  };

  return NavigationHammer;
}
