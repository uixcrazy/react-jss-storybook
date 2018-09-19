import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  button: {
    padding: 10,
    backgroundColor: 'cyan',
    borderRadius: 5,
    border: '2px solid #1fdcdc',
  },
  label: {
    fontWeight: 'bold',
  },
};

@injectSheet(styles)
class Button extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <button className={classes.button}>
        <span className={classes.label}>
          {children}
        </span>
      </button>
    );
  }
}
export default () => (
  <Button>Decorators</Button>
);
