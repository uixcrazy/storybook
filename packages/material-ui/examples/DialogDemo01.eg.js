import React, { Component } from 'react';
import DialogDemo01 from '../src/DialogDemo01';

export default class DialogDemo01Eg extends Component {
  state = {
    open: false,
  };

  toggleOpen = open => () => {
    this.setState({
      open,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <div style={{ height: '100%' }}>
          <button
            onClick={this.toggleOpen(true)}>
            open dialog
          </button>
        </div>
        <DialogDemo01
          open={this.state.open}
          toggleOpen={this.toggleOpen}
        />
      </div>
    );
  }
}
