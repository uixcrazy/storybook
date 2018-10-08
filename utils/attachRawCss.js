/**
 * http://cssinjs.org/js-api?v=v9.8.7
 * http://cssinjs.org/js-api?v=v9.8.7#setup-jss-instance
 * http://cssinjs.org/js-api/?v=v6.2.0#style-sheets-registry
 */
import React, { Component } from 'react';
import { SheetsRegistry, create } from 'jss';

const attachStyleSheet = (rawStyles, dataMeta = 'Here will be data-meta content!') => {
  const sheets = new SheetsRegistry();
  const _jss = create(); // eslint-disable-line no-underscore-dangle
  _jss.use({
    onCreateRule: (name, decl, options) => ({
      name,
      decl,
      options,
      toString: () => decl,
    }),
  });
  _jss.use({
    onProcessSheet(sheet) {
      sheet.attach();
      sheets.add(sheet);
    },
  });

  const sheet = _jss.createStyleSheet({
    '@rawCSS': rawStyles, // require('!!raw-loader!./App.css');
  }, {
    index: -Number.MAX_VALUE,
    meta: dataMeta,
  }).attach();
  return sheet;
};

const detachStyleSheet = sheet => sheet && sheet.detach();

const attachRawCss = (rawStyles, dataMeta, App) => {
  class AttachedApp extends Component {
    constructor(props) {
      super(props);
      this.sheet = null;
    }

    componentWillUnmount() {
      if (this.sheet) {
        detachStyleSheet(this.sheet);
      }
    }

    componentDidMount() {
      this.sheet = attachStyleSheet(rawStyles, dataMeta);
    }

    render() {
      return <App {...this.props}/>;
    }
  }
  return AttachedApp;
};

export {
  attachStyleSheet,
  detachStyleSheet,
};
export default attachRawCss;
