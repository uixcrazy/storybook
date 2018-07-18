import React, { Component } from 'react';
import { AppContext } from './AppContext';

export default class AppProvider extends Component {
  state = {
    number : 10,
    inc: () => {
      this.setState({number: this.state.number + 1})
    }
  }
render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}

//...

// class Red extends Component {
//   render() {
//     return  <AppProvider>
//         <div className="red">
//           <Blue />
//         </div>
//     </AppProvider>
//   }
// }