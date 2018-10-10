import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  btn: {
    fontSize: 16,
    borderRadius: 5,
    cursor: 'pointer',
    border: '1px solid #eee',
    padding: theme.spacing.unit,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.dark,
    '&:focus': {
      outline: 'none',
    },
  },
});

const Button = ({ classes }) => (
  <button
    className={classes.btn}
    onClick={() => {
      console.log('You clicked yellow button!');
    }}
  >
    Say hello
  </button>
);

export default injectSheet(styles)(Button);
