import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

const styles = {
  button: {
    color: 'black',
    padding: 10,
  },
  buttonActive: {
    composes: '$button',
    color: 'red',
  },
  buttonActiveDisabled: {
    composes: '$buttonActive',
    opacity: 0.5,
  },
  disabled: {
    opacity: 0.5,
  },
  active: {
    color: 'red',
  },
  buttonDisabled: {
    composes: ['$button', '$active', '$disabled'],
  },
};

const ListButton = ({ classes }) => (
  <Fragment>
    <button className={classes.button}>Button</button>
    <button className={classes.buttonActive}>Active Button</button>
    <button className={classes.buttonDisabled}>Disabled Button with active state</button>
  </Fragment>
);

export default injectSheet(styles)(ListButton);
