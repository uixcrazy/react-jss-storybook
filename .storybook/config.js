import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'react-jss-storybook',
  url: 'https://github.com/uixcrazy/react-jss-storybook',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
