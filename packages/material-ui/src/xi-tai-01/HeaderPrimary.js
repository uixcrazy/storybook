import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import styles from './HeaderPrimary.style';
import SearchBox from './SearchBox';
import Drawer from './Drawer';

class HeaderPrimary extends Component {
  state = {
    openDrawer: false,
  };

  toggleDrawer = openDrawer => () => {
    this.setState({
      openDrawer,
    });
  };

  render() {
    const { classes, placeholder } = this.props;
    return (
      <Fragment>
        <div className={classes.headerPrimary}>
          <div className={classes.logo}
            onClick={this.toggleDrawer(true)}
          >logo</div>
          <SearchBox placeholder={placeholder} />
          <IconButton className={classes.iconBtnCall}>
            <PhoneIcon
              classes={{
                root: classes.iconMenu,
              }}/>
          </IconButton>
        </div>
        <Drawer
          openDrawer={this.state.openDrawer}
          toggleDrawer={this.toggleDrawer}
        />
      </Fragment>
    );
  }
}

HeaderPrimary.propTypes = {
  classes: PropTypes.object,
  placeholder: PropTypes.string,
};

export default injectSheet(styles)(HeaderPrimary);
