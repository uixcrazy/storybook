import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './HeaderPrimary.style';
import SearchBox from './SearchBox';
import Drawer from './Drawer';

const HOTLINE = '1900 5214';

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
          <div className={classes.menu} onClick={this.toggleDrawer(true)}>
            <MenuIcon
              classes={{
                root: classes.iconMenu,
              }}/>
            <div className={classes.logo}>logo</div>
          </div>
          <SearchBox placeholder={placeholder} />
          <a className={classes.btnCallWrap} href={`tel:${HOTLINE}`}>
            <IconButton>
              <PhoneIcon
                classes={{
                  root: classes.iconCall,
                }}/>
            </IconButton>
            <span className={classes.labelCall}>Dii Giant</span>
          </a>
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
