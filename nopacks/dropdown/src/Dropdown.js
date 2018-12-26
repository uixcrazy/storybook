import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../../utils/withStyles';

class Dropdown extends Component {
  state = {
    focused: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (event) => {
    if (this.state.focused && this.dropdownRef && !this.dropdownRef.contains(event.target)) {
      this.setState({ focused: false });
      this.props.onHide();
    }
  }

  handleChange = () => {
    console.info('change...');
    this.setState(state => ({
      focused: !state.focused,
    }));
  }

  toggle(show = true) {
    this.setState({ focused: show });
  }

  render() {
    const {
      classes,
      wrapperKlass,
      ctKlass,
      headerKlass,
      headerCt,
    } = this.props;
    const { focused } = this.state;

    const wrapperClass = [classes.wrapper];
    if (wrapperKlass) wrapperClass.push(wrapperKlass);

    const ddHeaderClass = [classes.ddHeader];
    if (focused) ddHeaderClass.push('focused');
    if (headerKlass) ddHeaderClass.push(headerKlass);
    const dropdownCtClass = [classes.dropdownCt];
    if (ctKlass) dropdownCtClass.push(ctKlass);

    return (
      <div className={wrapperClass.join(' ')}
        ref={(node) => {
          this.dropdownRef = node;
        }}
      >
        <div
          className={ddHeaderClass.join(' ')}
          onClick={this.handleChange}
        >
          {headerCt} <i className={classes.iconAngleDown} />
        </div>
        { focused
          && <div className={dropdownCtClass.join(' ')}>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

const style = {
  wrapper: {
    position: 'relative',
  },
  ddHeader: {
    cursor: 'pointer',
    userSelect: 'none',
    height: '36px',
    lineHeight: '36px',
    borderRadius: '2px',
    border: 'solid 1px #bbb',
    paddingLeft: '8px',
    fontSize: '18px',
    color: '#333',
    position: 'relative',
    transition: '100ms linear all',
    '&.focused': {
      color: '#ccc',
      border: 'solid 1px #ddd',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      '& $iconAngleDown': {
        transform: 'rotate(-180deg)',
      },
    },
  },
  iconAngleDown: {
    content: '""',
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid #999',
    position: 'absolute',
    top: 'calc(50% - 2px)',
    right: '8px',
    transition: '200ms linear all',
  },
  dropdownCt: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    borderRadius: '2px',
    border: 'solid 1px #ddd',
    backgroundColor: '#fff',
  },
};

Dropdown.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  headerCt: PropTypes.string,
  wrapperKlass: PropTypes.string,
  headerKlass: PropTypes.string,
  ctKlass: PropTypes.string,
};

Dropdown.defaultProps = {
  onHide: () => {},
};

export default withStyles(style, Dropdown);
