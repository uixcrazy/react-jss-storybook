import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { CSSTransition } from 'react-transition-group';

const styles = {
  '@global': {
    '.collapse-enter': {
      height: 0,
    },
    '.collapse-enter-active': {
      height: '100%',
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      // ease linear ease-in ease-out ease-in-out cubic-bezier
    },
    '.collapse-exit': {
      height: '100%',
    },
    '.collapse-exit-active': {
      height: 0,
      transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
  },
  btn: {
    padding: '5px 10px',
    border: '1px solid #ccc',
    background: '#fff',
  },
  transition: {
    overflow: 'hidden',
    height: '500px',
    '& > ul': {
      overflow: 'hidden',
      // border: '1px solid #ccc',
    },
    '& li': {
      padding: 5,
      fontSize: 14,
      backgroundColor: '#fff',
    },
  },
};

class Demo extends Component {
  state = {
    isShow: false,
  }

  render() {
    const { classes, hotKeywords } = this.props;
    const { isShow } = this.state;
    return (
      <Fragment>
        <div className={classes.container}>
          <button className={classes.btn}
            onClick={() => {
              this.setState(state => ({ isShow: !state.isShow }));
            }}>toogle</button>
          <div className={classes.transition}>
            <CSSTransition
              in={isShow}
              timeout={300}
              classNames="collapse"
              unmountOnExit
              // onExited={() => {
              //   this.setState({
              //     isShow: false,
              //   });
              // }}
            >
              <ul>
                {hotKeywords.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </CSSTransition>
          </div>
        </div>
      </Fragment>
    );
  }
}

Demo.defaultProps = {
  hotKeywords: [
    { name: 'quả táo kimura' },
  ],
};

Demo.propTypes = {
  classes: PropTypes.object,
  hotKeywords: PropTypes.array,
};

export default injectSheet(styles)(Demo);

/**
 * https://reactcommunity.org/react-transition-group/css-transition
 * https://github.com/reactjs/react-transition-group/tree/v1-stable
 */
