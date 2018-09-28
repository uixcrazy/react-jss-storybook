import React, { Component, Fragment } from 'react';
import Inspector, { chromeDark } from 'react-inspector';
import { DefaultTheme } from '../utils/default-theme';

class ThemeDefaultInspector extends Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}
export default ThemeDefaultInspector;
