# Getting Started

## Install

```npm install --save react-jss```

or

```yarn add react-jss```

## Basic

1. At first, we have a React Component like this:

  ```
  import React from 'react';
  import PropTypes from 'prop-types';

  const GettingStarted = props => (
    <button className={props.classes.buttonOutlined}>
      Say hello
    </button>
  );

  export default GettingStarted;
  ```

2. Secondly, we import React-JSS:

  ```import injectSheet from 'react-jss'```

  And to create styles as JS Objects:

  ```
  const styles = {
    buttonOutlined: {
      ...

  }
  ```

  we can use a online utility tool to [convert CSS to JS Objects](https://transform.now.sh/css-to-js/)


3. Next, we inject the styles into the component

  ``` injectSheet(styles)(GettingStarted) ```

  React-JSS wraps your component with a HOC. It injects a property 'classes' to props like a object.

  ```
  GettingStarted.propTypes = {
    classes: PropTypes.object,
  }
  ```


4. We have to assign class name (defined in styles objects) to className:

  ``` ... className={this.props.classes.buttonOutlined} ...```

5. See Detail Sample [at next tab](/?selectedKind=React%20JSS&selectedStory=1.%20Getting%20Started&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook%2Fstorysource%2Fpanel)

## See more information

[React JSS](http://cssinjs.org/react-jss?v=v8.6.1)
