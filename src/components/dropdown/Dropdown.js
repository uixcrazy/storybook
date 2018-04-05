import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

class SimpleDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      currentItem: null,
    };
    // this.onOpen = this.onOpen.bind(this);
    // this.actionChangeItem = this.actionChangeItem.bind(this);
  }

  actionChangeItem(item) {
    this.props.actionChangeItem(item);
    this.setState(
      {
        isShow: false,
        currentItem: item,
      }
    )
  }

  onOpen() {
    this.setState(
      {
        isShow: !this.state.isShow,
      }
    )
  }

	render() {
    const {
      items,
      renderItem,
      renderItemSelected,
     } = this.props;
     const { isShow, currentItem } = this.state;
     const _currentItem = currentItem || items[0]
    return (
      <div className={`dropbox ${isShow ? 'active' : ''}`} >
        <div className="current" onClick={this.onOpen.bind(this)}>
          {renderItemSelected(_currentItem)}
        </div>
        <ol start="6">
          {
            items.map((item,index) => {
              return (
                <li key={index}
                  onClick={this.actionChangeItem.bind(this, item)}>
                  {renderItem(item, _currentItem, index)}
                </li>
              )
            })
          }
        </ol>
      </div>
    )

  }

}

SimpleDropdown.defaultProps = {
  items: [],
};

SimpleDropdown.propTypes = {
  items: PropTypes.array,
  actionChangeItem: PropTypes.func,
  renderItem: PropTypes.func,
  renderItemSelected: PropTypes.func,
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
