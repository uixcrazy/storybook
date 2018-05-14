/* eslint no-param-reassign: ["error", { "props": false }] */
import React, { Component } from 'react';
import Hammerjs from 'hammerjs';

export default function makeTabbableWidget(Widget) {
  class TabbableWidget extends Component {
    constructor(props) {
      super(props);
      this.autoSwitchTab = this.autoSwitchTab.bind(this);
      this.handleMouseHover = this.handleMouseHover.bind(this);
      this.intervalTab = null;
      if (props.tabInterval) {
        this.autoSwitchTab();
      }
      this.state = {
        activeSlide: 0,
        slideCount: 0,
        translateX: 0,
        hasitems: false,
        widthitems: null,
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

    componentDidUpdate() {
      this.updateUI();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', () => {
        this.updateUI();
      });
    }

    autoSwitchTab() {
      if (this.intervalTab === null) {
        this.intervalTab = setInterval(() => {
          this.switchNextTab();
        }, this.props.tabInterval);
      }
    }

    handleMouseHover() {
      if (this.intervalTab) {
        clearInterval(this.intervalTab);
      }
    }

    switchNextTab() {
      const props = this.props;
      const defaultSelectedId = props.defaultSelected;
      if (defaultSelectedId) {
        let index = indexOfObject(props.items, 'id', defaultSelectedId);
        const totalitems = props.items.length;
        index = index + 1 === totalitems ? 0 : index + 1;
        const tab = props.items[index];
        this.changeTab(tab.id, tab.name, index, false);
      }
    }

    updateUI() {
      const widthitems = this.getWidthitems();
      const widthSwiper = this.itemsElement && this.itemsElement.clientWidth;
      const { paddingLeft, paddingRight } = this.props;
      if (this.state.widthitems !== widthitems || this.state.widthSwiper !== widthSwiper) {
        if (widthSwiper < widthitems) {
          const {
            slideCount,
            widthEachSlide,
            posEachSlideNext,
          } = this.getWidthEachSlide();
          const maxTx = -(widthitems - (widthSwiper - paddingRight));
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
            hasitems: true,
            widthitems,
            widthSwiper,
            maxTx,
          });
        } else {
          this.setState({
            slideCount: 0,
            widthEachSlide: [],
            hasitems: false,
            widthitems,
            widthSwiper,
          });
        }
      }
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
      const opencastPrev = -(
        (posEachSlideNext[index] - paddingLeft)
        - (widthEachSlide[index] + (translateX - paddingLeft)));

      if (widthEachSlide[index] > opencastNext) {
        this.nextSlide();
      }

      if (widthEachSlide[index] > opencastPrev) {
        this.goToSlide(index);
      }
    }

    changeTab(id, name, index, isTracking) {
      // setTimeout(() => { // old code
      const {
        defaultSelected,
        items,
      } = this.props;

      const isActive = defaultSelected && items[index]
        && this.props.defaultSelected === items[index].id;
      if (!isActive) {
        this.checkActiveTabHidden(index);
        this.props.updateData(id, name, isTracking);
      }
      // }, 300);
    }

    render() {
      const {
        items,
        paddingLeft,
        paddingRight,
      } = this.props;
      const {
        translateX,
        widthitems,
        hasitems,
        maxTx,
      } = this.state;
      const disabledLeft = (translateX === paddingLeft);
      const disabledRight = (maxTx >= translateX);
      return (
        <div>test</div>
      );
    }
  }

  TabbableWidget.defaultProps = {
    paddingLeft: 26,
    paddingRight: 26,
  };

  TabbableWidget.propTypes = {
    items: PropTypes.array,
    defaultSelected: PropTypes.number,
    updateData: PropTypes.func,
    intervalTab: PropTypes.func,
    tabInterval: PropTypes.number,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
  };

  return TabbableWidget;
}
