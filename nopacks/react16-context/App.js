import React, { Component } from 'react';
import AppProvider from './AppProvider';
import { AppContext } from './AppContext';
import './App.css';

const Green = () => (
  <div className="green">
     <AppContext.Consumer>
        {(context) => context.number}
      </AppContext.Consumer>
  </div>
)
const Blue = () => (
  <div className="blue">
    <AppContext.Consumer>
        {(context) => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
    <Green />
  </div>
)

class Red extends Component {
  render() {
    return  <AppProvider>
        <div className="red">
          <AppContext.Consumer>
            {(context) => context.number}
          </AppContext.Consumer>
          <Blue />
        </div>
    </AppProvider>
  }
}

const App = () => (
  <div>
    <Red />
    {/* eslint-disable */}
    <a href="https://hackernoon.com/how-to-use-the-new-react-context-api-fce011e7d87"
      target="_blank"
      style={{
        color: '#0ff',
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}>Refs</a>
  </div>
);

export default App;
