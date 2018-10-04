import React, { Component } from 'react';
import jss from 'jss';
import { JssProvider, ThemeProvider } from 'react-jss';
import { DefaultTheme } from '../shared/default-theme';

const theme = {
  ...DefaultTheme,
  palette: { // it's wrong!!!
    primary: {
      light: '#fff352',
      main: '#fef035',
      dark: '#e5d900',
    },
    secondary: {
      light: '#014c8c',
      main: '#014c8c',
      dark: '#014c8c',
    },
  },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.jss = null;
    this.sheet = null;
  }

  componentWillUnmount() {
    if (this.sheet) {
      this.sheet.detach();
    }
  }

  componentDidMount() {
    /**
    * http://cssinjs.org/js-api#create-style-sheet
    */
    this.sheet = jss
      .createStyleSheet(
        {
          // "button" is a rule name, class is generated.
          button: {
            width: 100,
            height: 100,
          },
        },
        { media: 'print' }
      )
      .attach();
  }

  render() {
    return (
      <JssProvider jss={jss}>
        <ThemeProvider theme={theme}>
          {this.props.children}
        </ThemeProvider>
      </JssProvider>
    );
  }
}
