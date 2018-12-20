import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from './ihatetomatoes/Card';
import data from './ihatetomatoes/data';
import attachRawCss from '../../../utils/attachRawCss';
import appStyles from '!!raw-loader!./ihatetomatoes/App.css';// eslint-disable-line

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearHome: true,
      property: data.properties[0],
    };
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome,
    });
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex],
    });
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex],
    });
  }

  render() {
    const { appearHome, property } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
        <button onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}>Next</button>
        <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
        <div className="page">
          <TransitionGroup className="card-container">
            <CSSTransition
              key={property.id}
              timeout={4500}
              classNames="slide"
            >
              <Card property={property} />
            </CSSTransition>
          </TransitionGroup>
        </div>

      </div>
    );
  }
}
export default attachRawCss(appStyles, 'App Styles', App);
