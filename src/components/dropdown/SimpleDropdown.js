import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleDropdown.css';

class SimpleDropdown extends Component {
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
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.state.items) !== JSON.stringify(nextProps.items)) {
      this.setState({
        items: nextProps.items,
        currentItem: null,
      });
    }
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

  show() {
    console.log('open')
    this.setState({ isShow: true })
  }

  hide() {
    this.setState({ isShow: false })
  }

  renderUI() {
    const { isShow, items, currentItem } = this.state;
    const crrItem = currentItem || items[0];
    return (
      <div ref={(node) => {this.dropdownRef = node}}
        className={`dropbox ${isShow ? 'active' : ''}`}>
        <div className="current" onClick={this.show.bind(this)}>
          <p>
            {crrItem && crrItem.name}
            { items.length > 1 && <i className="icon">↓</i> }
          </p>
        </div>
        <div className="ddct">
          <ul>
            {
              items.map((item, index) => (
                <li key={index}
                  onClick={this.handleChangeItem.bind(this, item)}>
                    <a>
                      <span>{item.name}</span>
                      {(item.name === crrItem.name) ? <span class="checkmark" /> : '' }
                    </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }

	render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        { items.length > 0 ? this.renderUI() : <span>no data</span>}
      </React.Fragment>
    )
  }
}

SimpleDropdown.defaultProps = {
  items: [],
};

SimpleDropdown.propTypes = {
  items: PropTypes.array,
  actionChangeItem: PropTypes.func,
}

export default SimpleDropdown;


// ↓↓↓ test
// const ITEMS = [
//   { name: 'All Flowers' },
//   { name: 'Chrysanthemum' },
//   { name: 'Ixora' },
//   { name: 'Wild Sunflower' },
//   { name: 'Bougainvillaea' },
//   { name: 'Rose' },
//   { name: 'Jasmine' },
//   { name: 'Orchids' },
// ]

// function actionChangeItem(item) {
//   console.log('click item', item);
// }
