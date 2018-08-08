import React from 'react';
import injectSheet from 'react-jss';

export const withStyles = (WrappedComponent, styles) => (
  injectSheet(styles)(WrappedComponent)
);
