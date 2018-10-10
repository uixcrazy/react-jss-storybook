/**
 * this is different ```withTheme``` by react-jss
 * only need apply at Layout once time
 */
import React from 'react';
import injectSheet, { ThemeProvider } from 'react-jss';
import merge from 'lodash.merge';
import { DefaultTheme } from './default-theme';

const injectSheetWithTheme = (styles, App) => {
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
      // gray: #686868, #D8D8D8
    }
  );
  const StyledApp = injectSheet(styles)(App);
  const Layout = props => (
    <ThemeProvider theme={theme}>
      <StyledApp {...props}/>
    </ThemeProvider>
  );
  return Layout;
};
export default injectSheetWithTheme;

// const AppLayout = props => (
//   <ThemeProvider theme={theme}>
//     {props.children}
//   </ThemeProvider>
// );
/* ⇣ ⇣ ⇣ ⇣ ⇣ */
// const StyledAppWithTheme = () => (
//   <AppLayout>
//     <App />
//   </AppLayout>
// );
