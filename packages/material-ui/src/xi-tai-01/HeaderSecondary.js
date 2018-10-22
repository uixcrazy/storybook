import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import styles from './HeaderSecondary.style';
import SearchBox from './SearchBox';

class HeaderSecondary extends Component {
  state = {
    isSearchBoxFocus: false,
  };

  handleFocus = (isSearchBoxFocus) => {
    this.setState({
      isSearchBoxFocus,
    });
  }

  render() {
    const {
      classes,
      detailName,
    } = this.props;
    const { isSearchBoxFocus } = this.state;
    return (
      <div className={classes.headerSecondary}>
        <div className={classes.leftCt}>
          <ArrowBackIcon className={classes.arrowBackIcon}/>
          <div className={classes.detailName}>
            {detailName}
          </div>
        </div>
        <div className={`${classes.rightCt} ${isSearchBoxFocus ? 'expanded' : ''}`}>
          <SearchIcon
            className={`${classes.searchIcon} ${isSearchBoxFocus ? 'hidden' : ''}`}
            onClick={() => {
              this.handleFocus(true);
            }}
          />
          {isSearchBoxFocus
            ? <SearchBox autoFocus={true} handleFocus={this.handleFocus}/>
            : null
          }
        </div>
      </div>
    );
  }
}

HeaderSecondary.defaultProps = {
  detailName: 'chuyện con mèo dạy hải âu bay - Story Of A Seagull And The Cat Who Taught Her To Fly',
};

HeaderSecondary.propTypes = {
  classes: PropTypes.object,
  detailName: PropTypes.string,
};

export default injectSheet(styles)(HeaderSecondary);
