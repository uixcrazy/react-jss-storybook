import React, { Component } from 'react';
import jss from 'jss';
import { JssProvider, ThemeProvider } from 'react-jss';
import merge from 'lodash.merge';
import { DefaultTheme } from '../utils/default-theme';
import createGenerateClassName from '../utils/createGenerateClassName';

const theme = merge(
  DefaultTheme,
  {
    palette: {
      primary: {
        light: '#fef35d',
        main: '#fef035',
        dark: '#e5d900',
        contrastText: '#35495a',
      },
      secondary: {
        light: '#5d6d7b',
        main: '#35495A',
        dark: '#373A3C',
        contrastText: '#fff',
      },
    },
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.jss = null;
    this.sheet = null;
    this.generateClassName = createGenerateClassName();
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
      <JssProvider generateClassName={this.generateClassName}>
        <ThemeProvider theme={theme}>
          {this.props.children}
        </ThemeProvider>
      </JssProvider>
    );
  }
}
