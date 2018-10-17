/**
 * https://reactcommunity.org/react-transition-group/css-transition
 */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import attachRawCss from '../_utils/attachRawCss';
// ⇣ ⇣ ⇣  import './original.css';
import styles from '!!raw-loader!./original.css'; // eslint-disable-line

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
      <div>
        <form style={{ marginTop: '1rem' }}>
          <span>Your name</span>
          <input
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
          <CSSTransition
            in={showValidationMessage}
            timeout={300}
            classNames="expansion"
            unmountOnExit
            onExited={() => {
              this.setState({
                showValidationButton: true,
              });
            }}
          >
            {state => (
              <div className="help-block">
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
          </CSSTransition>
        </form>
        { showValidationButton ? (
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

export default attachRawCss(styles, 'demo css-transition', Example);
