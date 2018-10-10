import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Inspector, { chromeDark } from 'react-inspector';
import { DefaultTheme } from '../_utils/default-theme';

const styles = {
  defaultTheme: {
    marginTop: 8,
    '& > label': {
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
    },
    '& [type="checkbox"]': {
      marginRight: 4,
    },
    '& li': { // for Inspector Tree
      padding: '5px 0',
    },
  },
};

class ThemeDefaultInspector extends Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <div className={this.props.classes.defaultTheme}>
        <label>
          <input type="checkbox"
            onChange={(event, value) => this.setState({ checked: !checked })} // eslint-disable-line
            defaultChecked={this.state.checked}
          />
          <span>Expand all</span>
        </label>
        <div style={{ padding: 10, backgroundColor: '#242424', zoom: '130%' }}>
          <Inspector
            theme={
              {
                ...chromeDark,
                ...({ TREENODE_PADDING_LEFT: 20 }),
                fontSize: 18,
              }
            }
            data={DefaultTheme}
            expandLevel={checked ? 100 : 1}
            key={`${checked}-${DefaultTheme.palette.type}`}
          />
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(ThemeDefaultInspector);
