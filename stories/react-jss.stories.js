import React from 'react';
import { storiesOf } from '@storybook/react';
import WithNotes from '../.storybook/addons/notes/WithNotes';
import WithStorySource from '../.storybook/addons/storysource/WithStorySource';

import GettingStarted from '../src/getting-started';
import GettingStartedReadme from '../src/getting-started/README.md';
import GettingStartedContent from '!!raw-loader!../src/getting-started';

import Theming from '../src/theming';
import ThemingReadme from '../src/theming/README.md';
import ThemingContent from '!!raw-loader!../src/theming';

import SSRendering from '../src/server-side-rendering';
import SSRenderingReadme from '../src/server-side-rendering/README.md';
import SSRenderingContent from '!!raw-loader!../src/server-side-rendering';

storiesOf('React JSS', module)
.add('1. Getting Started', () =>(
  <WithNotes notes={GettingStartedReadme}>
    <WithStorySource storysource={GettingStartedContent}>
      <GettingStarted />
    </WithStorySource>
  </WithNotes>
))
.add('2. Theming', () =>(
  <WithNotes notes={ThemingReadme}>
    <WithStorySource storysource={ThemingContent}>
      <Theming />
    </WithStorySource>
  </WithNotes>
))
.add('3. Server-side rendering', () =>(
  <WithNotes notes={SSRenderingReadme}>
    <WithStorySource storysource={SSRenderingContent}>
      <SSRendering />
    </WithStorySource>
  </WithNotes>
))
