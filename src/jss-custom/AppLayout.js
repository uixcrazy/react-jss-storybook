import React from 'react';
import jss from 'jss';
import { JssProvider, ThemeProvider } from 'react-jss';
import { DefaultTheme } from '../utils/default-theme';

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

jss
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

const App = props => (
  <JssProvider jss={jss}>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </JssProvider>
);

export default App;
