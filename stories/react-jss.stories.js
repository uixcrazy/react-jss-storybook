import React from 'react';
import { storiesOf } from '@storybook/react';
import WithNotes from '../.storybook/addons/notes/WithNotes';
import WithStorySource from '../.storybook/addons/storysource/WithStorySource';

import GettingStarted from '../src/getting-started';
import GettingStartedReadme from '../src/getting-started/README.md';
import GettingStartedContent from '!!raw-loader!../src/getting-started';

import Theme from '../src/theme';
import ThemeReadme from '../src/theme/README.md';
import ThemeContent from '!!raw-loader!../src/theme';

storiesOf('React JSS', module)
.add('1. Getting Started', () =>(
  <WithNotes notes={GettingStartedReadme}>
    <WithStorySource storysource={GettingStartedContent}>
      <GettingStarted />
    </WithStorySource>
  </WithNotes>
))
.add('2. Theme', () =>(
  <WithNotes notes={ThemeReadme}>
    <WithStorySource storysource={ThemeContent}>
      <Theme />
    </WithStorySource>
  </WithNotes>
))
