/* eslint-disable */
import React from 'react';
import injectSheet from 'react-jss';
import attachRawCss from './attachRawCss';
import resetStyles from '!!raw-loader!./normalize.css';
export const withStyles = (styles, WrappedComponent) => {
  const _WrappedComponent = attachRawCss(resetStyles, 'normalize', WrappedComponent);
  return injectSheet(styles)(_WrappedComponent);
};
