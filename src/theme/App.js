import React from 'react';
import { ThemeProvider } from 'react-jss';

const theme = {
  colorPrimary: 'green'
}

const App = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

export default App;
