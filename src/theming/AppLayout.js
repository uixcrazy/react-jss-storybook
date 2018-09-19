import React from 'react';
import { ThemeProvider } from 'react-jss';
import { DefaultTheme } from './default-theme';

const theme = { ...DefaultTheme, palette: { // it's wrong!!!
  primary: {
    light: '#fff352',
    main: '#fef035',
    dark: '#e5d900',
  },
  secondary: {
    light: '#014c8c',
    main: '#014c8c',
    dark: '#014c8c',
  }
}}

const App = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

export default App;
