import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import keyframes from './keyframes';

const styles = {
  '@keyframes expand': keyframes.expand,
  '@keyframes collapse': keyframes.collapse,
  btn: {
    padding: '5px 10px',
    border: '1px solid #ccc',
  },
  transition: {
    overflow: 'hidden',
    height: '300px',
    display: 'none',
    backgroundColor: 'transparent',
    '& > ul': {
      overflow: 'hidden',
      // border: '1px solid #ccc',
    },
    '& li': {
      padding: 5,
      fontSize: 14,
      backgroundColor: '#fff',
    },
    '&.show': {
      display: 'block',
    },
  },
  noCollapse: {
    height: 0,
    animation: 'collapse 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  hasCollapse: {
    height: '100%',
    animation: 'expand 300ms cubic-bezier(0.4, 0, 0.2, 1)',
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
        <button className={classes.btn}
          onClick={() => {
            this.setState(state => ({ isShow: !state.isShow }));
          }}>toogle</button>
        <div className={`${classes.transition} ${isShow ? 'show' : ''}`}>
          <ul className={isShow ? classes.hasCollapse : classes.noCollapse}>
            {hotKeywords.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
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
