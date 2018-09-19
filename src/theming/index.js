import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';
import AppLayout from './AppLayout';
import ThemeDefaultInspector from './ThemeDefaultInspector';

const styles = theme => ({
  btn: {
    display: 'inline-flex',
    border: '1px solid #eee',
    fontSize: 18,
    letterSpacing: 0.6,
    borderRadius: 5,
    cursor: 'pointer',
    padding: theme.spacing.unit,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.dark,
  },
  defaultTheme: {
    marginTop: theme.spacing.unit,
    '& > label': {
      marginBottom: theme.spacing.unit,
      display: 'flex',
      alignItems: 'center',
    },
    '& [type="checkbox"]': {
      marginRight: theme.spacing.unit / 2,
    },
    '& li': { // for Inspector Tree
      padding: '5px 0',
    },
  },
});

class Button extends Component {
  state = {
    message: 'Hello!',
  };

  handleClick = () => {
    alert(this.state.message);
  }

  render() {
    return (
      <Fragment>
        <button
          className={this.props.classes.btn}
          onClick={this.handleClick}>
          Say hello
        </button>
        <div className={this.props.classes.defaultTheme}>
          <ThemeDefaultInspector />
        </div>
      </Fragment>
    );
  }
}

const StyledButton = injectSheet(styles)(Button);

const StyledButtonWithTheme = () => (
  <AppLayout>
    <StyledButton />
  </AppLayout>
);

export default StyledButtonWithTheme;
