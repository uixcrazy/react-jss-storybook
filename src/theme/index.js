import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import AppLayout from './App';

const styles = theme => ({
  btn: {
    display: 'inline-flex',
    border: '1px solid #eee',
    fontSize: 18,
    letterSpacing: 0.6,
    borderRadius: 5,
    transition: 'color 300ms ease-in-out, background-color 300ms ease-in-out, opacity 300ms ease-in-out',
    verticalAlign: 'middle',
    padding: 10,
    '&:hover': {
      color: '#fff',
      backgroundColor: '#00a7cf',
      borderColor: '#009fc5',
    }
  },
});

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }
  handleClick = () => {
    alert(this.state.message);
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

Button.propTypes = {
  classes: PropTypes.object,
};

const StyledButton = injectSheet(styles)(Button);


const StyledButtonWithTheme = () => (
  <AppLayout>
    <StyledButton />
  </AppLayout>
)

export default StyledButtonWithTheme;
