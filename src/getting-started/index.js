import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import React-JSS
import injectSheet from 'react-jss';

const styles = {
  btn: {
    display: 'inline-flex',
    border: '1px solid #eee',
    fontSize: 18,
    letterSpacing: 0.6,
    borderRadius: 5,
    cursor: 'pointer',
    transition: `color 300ms ease-in-out,
      background-color 300ms ease-in-out,
      opacity 300ms ease-in-out`,
    verticalAlign: 'middle',
    padding: { // jss-expand gives more readable syntax
      top: 9, // jss-default-unit makes this 5px
      right: 20,
      bottom: 10,
      left: 20,
    },
    '&:hover': {
      color: '#fff',
      backgroundColor: '#00a7cf',
      borderColor: '#009fc5',
    },
  },
};

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello!' };
  }

  handleClick = () => {
    console.log(this.state.message);
  }

  render() {
    return (
      <button
        className={this.props.classes.btn}
        onClick={this.handleClick}>
        Say hello
      </button>
    );
  }
}

GettingStarted.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(GettingStarted);
