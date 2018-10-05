/**
 * http://cssinjs.org/js-api?v=v9.8.7
 * http://cssinjs.org/js-api?v=v9.8.7#setup-jss-instance
 */
import React, { Component } from 'react';
import jss, { SheetsRegistry, create } from 'jss';

function attachStyleSheet(rawStyles, dataMeta = 'Here will be data-meta content!') {
  const sheets = new SheetsRegistry();
  const _jss = create(); // eslint-disable-line
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

  let memDocument = null;
  function inject(document) {
    _jss.setup(Object.assign({}, {
      insertionPoint: document.head,
      Renderer: jss.options.Renderer,
    }));

    if (memDocument !== document) {
      memDocument = document;
      sheets.registry.forEach((ss) => {
        ss.detach();
        /* eslint-disable no-param-reassign */
        ss.options.insertionPoint = document.head;
        ss.renderer = new jss.options.Renderer(ss);
        ss.deployed = false;
        ss.attached = false;
        ss.attach();
      /* eslint-enable */
      });
    }
  }
  _jss.inject2Doc = inject;
  return sheet;
}

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
      return (<App {...this.props}/>);
    }
  }
  return AttachedApp;
};

export {
  attachStyleSheet,
  detachStyleSheet,
};
export default attachRawCss;
