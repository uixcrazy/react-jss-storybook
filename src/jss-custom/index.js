import React from 'react';
import injectSheet from 'react-jss';
import AppLayout from './AppLayout';

const styles = theme => ({
  buttonOutlined: {
    fontSize: 18,
    borderRadius: 5,
    cursor: 'pointer',
    border: '1px solid #eee',
    padding: theme.spacing.unit,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.dark,
  },
});

const Button = props => (
  <button className={props.classes.buttonOutlined}>
    Say hello
  </button>
);

const StyledButton = injectSheet(styles)(Button);
const StyledButtonWithTheme = () => (
  <AppLayout>
    <StyledButton />
  </AppLayout>
);

export default StyledButtonWithTheme;
