import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  '@global': {
    '*:focus': {
      outline: 'none',
    },
  },
  buttonOutlined: {
    fontSize: 14,
    borderRadius: 5,
    color: '#999',
    cursor: 'pointer',
    border: '2px solid #ddd',
    transition: `color 300ms ease-in-out,
      background-color 300ms ease-in-out`,
    padding: { // jss-expand gives more readable syntax
      top: 9, // jss-default-unit makes this 5px
      right: 20,
      bottom: 10,
      left: 20,
    },
    '&:hover': {
      color: '#fff',
      backgroundColor: '#00a7cf',
      borderColor: '#00a7cf',
    },
  },
};

const GettingStarted = props => (
  <button className={props.classes.buttonOutlined}>
    Say hello
  </button>
);

GettingStarted.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(GettingStarted);
