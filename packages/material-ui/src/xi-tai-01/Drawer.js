
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import IconClose from '@material-ui/icons/Close';
import styles from './Drawer.style';

const Drawer = ({ classes, openDrawer, toggleDrawer }) => (
  <SwipeableDrawer
    anchor="left"
    open={openDrawer}
    onClose={toggleDrawer(false)}
    onOpen={toggleDrawer(true)}
  >
    <div
      className={classes.sideMenuWrap}
      tabIndex={0}
      role="button"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.sideMenu}>
        <IconButton
          className={classes.btnClose}
          onClick={toggleDrawer(false)}>
          <IconClose
            classes={{
              root: classes.iconClose,
            }}/>
        </IconButton>
        <div className={classes.logo}>
          <a href="/nogc">nogc</a>
        </div>
        <List
          classes={{
            root: classes.ctMenu,
          }}>
          <a href="/">
            <ListItem button
              classes={{
                root: classes.listItem,
              }}>
              {/* <ListItemIcon>
                <IconHome />
              </ListItemIcon> */}
              <span className={classes.listItemText}>Trang chủ</span>
            </ListItem>
          </a>
          <a href="/du-an">
            <ListItem button
              classes={{
                root: classes.listItem,
              }}>
              <span className={classes.listItemText}>Products</span>
            </ListItem>
          </a>
        </List>
        <Divider />
        <div className={classes.footer}>
          <List>
            <p className={classes.drawerTitle}>Action group</p>
            <a
              className={classes.hotline}
              href={'tel:0922352'}
            >
              <span>GROUP:</span>
              <span className={classes.drawerTextSuccess}>group name oe</span>
              <span>(listening)</span>
            </a>
          </List>
        </div>
      </div>
    </div>
  </SwipeableDrawer>
);

Drawer.propTypes = { classes: PropTypes.object };
export default injectSheet(styles)(Drawer);
