import React from 'react';
import { CSSTransition } from 'react-transition-group';
import attachRawCss from '../../../utils/attachRawCss';
import appStyles from '!!raw-loader!./css-transition.eg.css';// eslint-disable-line

class Example extends React.Component {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false,
  };

  render() {
    const {
      name,
      showValidationMessage,
      showValidationButton,
    } = this.state;
    return (
      <div style={{ padding: '2rem' }}>
        <div>
          <label>Your name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onFocus={() => {
              this.setState({
                showValidationMessage: false,
              });
            }}
            onChange={(event) => {
              this.setState({
                name: event.target.value,
                showValidationButton: true,
              });
            }}
          />
        </div>

        {/* demo simple */}
        <CSSTransition
          in={showValidationMessage}
          timeout={300}
          classNames="message"
          unmountOnExit
          onExited={() => {
            this.setState({
              showValidationButton: true,
            });
          }}
        >
          <div>Your name rocks!</div>
        </CSSTransition>

        {/* <CSSTransition
          in={showValidationMessage}
          timeout={300}
          classNames="message"
          unmountOnExit
          onExited={() => {
            this.setState({
              showValidationButton: true,
            });
          }}
        >
          {state => (
            <div>
              Your name rocks!
              <CSSTransition
                in={state === 'entered'}
                timeout={300}
                classNames="star"
                unmountOnExit
              >
                <div className="star">⭐</div>
              </CSSTransition>
            </div>
          )}
        </CSSTransition> */}

        {showValidationButton ? (
          <button
            onClick={() => {
              this.setState({
                showValidationButton: false,
                showValidationMessage: true,
              });
            }}
          >
            Validate form
          </button>
        ) : null}
      </div>
    );
  }
}

export default attachRawCss(appStyles, 'App Styles', Example);
