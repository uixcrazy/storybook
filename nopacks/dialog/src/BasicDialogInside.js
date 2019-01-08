/**
 * Target
 *   1. BasicDialog maybe inside a components or BODY
 *   2. fixed như Marterial
 */
import React from 'react';
import injectSheet from 'react-jss';

const BasicDialogInside = ({ classes, onClose, children }) => (
  <div className={classes.dialog}>
    <div className={classes.backdrop} onClick={onClose}/>
    {children}
  </div>
);

const styles = {
  dialog: {
    position: 'absolute',
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    position: 'absolute',
    overflow: 'auto',
    zIndex: -1,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
  },
};

export default injectSheet(styles)(BasicDialogInside);
