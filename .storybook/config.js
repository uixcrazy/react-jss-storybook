import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'react-jss-storybook',
  url: 'https://github.com/uixcrazy/react-jss-storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
