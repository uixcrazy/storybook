import React, { Component } from 'react';
import PropTypes from 'prop-types';
import attachRawCss from '../../../utils/attachRawCss';
import styles from '!!raw-loader!./BasicDropdown.css'; // eslint-disable-line

class BasicDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      items: this.props.items,
      currentItem: null,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderUI = this.renderUI.bind(this);
  }

  // not good at React v.16 ↓↓↓ → we have to change it
  // componentWillReceiveProps(nextProps) {
  //   if (JSON.stringify(this.state.items) !== JSON.stringify(nextProps.items)) {
  //     this.setState({
  //       items: nextProps.items,
  //       currentItem: null,
  //     });
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(prevState.items) !== JSON.stringify(nextProps.items)) {
      return {
        items: nextProps.items,
        currentItem: null,
      };
    }
    return null;
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside(event) {
    if (this.dropdownRef && !this.dropdownRef.contains(event.target)) {
      this.hide();
    }
  }

  handleChangeItem(item) {
    this.props.actionChangeItem(item);
    this.setState({ isShow: false, currentItem: item });
  }

  toggle() {
    this.setState({ isShow: !this.state.isShow });
  }

  hide() {
    this.setState({ isShow: false });
  }

  renderUI() {
    const { isShow, items, currentItem } = this.state;
    const crrItem = currentItem || items[0];
    return (
      <div ref={(node) => { this.dropdownRef = node; }}
        className={`dropbox ${isShow ? 'active' : ''}`}>
        <div className="current" onClick={this.toggle.bind(this)}>
          <span>{crrItem && crrItem.name}</span>
          { items.length > 1 && <i className="icon-arrow-down"></i> }
        </div>
        <div className="ddct">
          <ul>
            {
              items.map((item, index) => (
                <li key={index}
                  onClick={this.handleChangeItem.bind(this, item)}>
                  <span>{item.name}</span>
                  {/* {(item.name === crrItem.name) ? <span class="checkmark" /> : '' } */}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        { items.length > 0 ? this.renderUI() : <span>no data</span>}
      </React.Fragment>
    );
  }
}

BasicDropdown.defaultProps = {
  items: [],
};

BasicDropdown.propTypes = {
  items: PropTypes.array,
  actionChangeItem: PropTypes.func,
};

export default attachRawCss(styles, 'Dropdown', BasicDropdown);
