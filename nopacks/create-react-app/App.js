import React, { Component } from 'react';
import { attachStyleSheet, detachStyleSheet } from '../../utils/attachRawCss';
import logo from './logo.svg';
//  ⇣  ⇣  ⇣  ⇣  ⇣  import './App.css';
import appStyle from '!!raw-loader!./App.css'; // eslint-disable-line

export default class App extends Component {
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
    this.sheet = attachStyleSheet(appStyle, 'App');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
