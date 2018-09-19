import React from 'react';
import { storiesOf } from '@storybook/react';
import WithNotes from '../.storybook/addons/notes/WithNotes';
import WithStorySource from '../.storybook/addons/storysource/WithStorySource';
/* eslint-disable */
import GettingStarted from '../src/getting-started';
import GettingStartedReadme from '../src/getting-started/README.md';
import GettingStartedContent from '!!raw-loader!../src/getting-started';

import Theming from '../src/theming';
import ThemingReadme from '../src/theming/README.md';
import ThemingContent from '!!raw-loader!../src/theming';

import SSRendering from '../src/server-side-rendering';
import SSRenderingReadme from '../src/server-side-rendering/README.md';
import SSRenderingContent from '!!raw-loader!../src/server-side-rendering';

import Decorators from '../src/decorators';
import DecoratorsReadme from '../src/decorators/README.md';
import DecoratorsContent from '!!raw-loader!../src/decorators';

import JssCustom from '../src/jss-custom';
import JssCustomReadme from '../src/jss-custom/README.md';
import JssCustomContent from '!!raw-loader!../src/jss-custom';

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
.add('4. Decorators', () =>(
  <WithNotes notes={DecoratorsReadme}>
    <WithStorySource storysource={DecoratorsContent}>
      <Decorators />
    </WithStorySource>
  </WithNotes>
))
.add('5. Custom setup', () =>(
  <WithNotes notes={JssCustomReadme}>
    <WithStorySource storysource={JssCustomContent}>
      <JssCustom />
    </WithStorySource>
  </WithNotes>
))
// .