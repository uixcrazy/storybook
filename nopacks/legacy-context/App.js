import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import AppProvider from './AppProvider';
// import { AppContext } from './AppContext';
import './App.css';

class Button extends React.Component {
  render() {
    console.log(this.context);
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string,
  getData: PropTypes.func,
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    this.getData = this.getData.bind(this);
  }
  getChildContext() {
    return {
      color: "purple",
      getData: this.getData,
    };
  }

  getData() {
    return 'Dai Ngoc';
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  getData: PropTypes.func,
};

const App = () => (
  <div>
    <MessageList messages={
      [
        {
          text: 'abc',
          color: '#f06'
        },
        {
          text: 'afdas',
          color: '#0f0'
        }
      ]
    }/>
    {/* eslint-disable */}
    <a href="https://reactjs.org/docs/legacy-context.html"
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
