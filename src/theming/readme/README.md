# Theme Provider

Themes let you apply a consistent tone to your app.
It allows you to customize all design aspects of your project in order to meet the specific needs of your bussines.

![theme](https://raw.githubusercontent.com/uixcrazy/react-jss-storybook/master/src/theming/readme/images/withTheme.png)

## How to use

1. At first, we need to define a theme.
  *(I use default-theme of material-ui to do demo)*

2. Then we wrap your *application* with **ThemeProvider** and pass the theme here (once time).

    __ ThemeProvider will pass it over context to your styles.

    __ After that you may change your theme, and all your components will get the new theme automatically.

    __ Props's theme should be an object or function.

    __ In case you need to access the theme but not render any CSS, you can also use **withTheme**

  ```
  import React from 'react';
  import { ThemeProvider } from 'react-jss';

  const theme = { };

  const AppLayout = () => (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );

  const AppLayout = props => (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
```

3. Create component *Button*

```
import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  btn: {
    cursor: 'pointer',
    border: '1px solid #eee',
    padding: theme.spacing.unit,
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
  },
});

const Button = ({ classes }) => (
  <button className={classes.btn}>
    Say hello
  </button>
);

export default injectSheet(styles)(Button);
````

## See more information

[Theming : react-jss](http://cssinjs.org/react-jss#theming)

[default theme](https://material-ui.com/customization/default-theme/)

