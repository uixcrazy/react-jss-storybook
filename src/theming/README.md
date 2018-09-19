# Theme Provider

Themes let you apply a consistent tone to your app.
It allows you to customize all design aspects of your project in order to meet the specific needs of your bussines.

## How to use

1. At first, we need to define a theme.
  (I use default-theme of material-ui to do demo)

2. Then we wrap your application with **ThemeProvider** and pass the theme here.

    - ThemeProvider will pass it over context to your styles.

    - Props's theme should be an object or function.

    - In case you need to access the theme but not render any CSS, you can also use **withTheme**

## See more information

[Theming : react-jss](http://cssinjs.org/react-jss?v=v8.6.1#theming)

[default theme](https://material-ui.com/customization/default-theme/)