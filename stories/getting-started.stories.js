import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withMarkdownNotes } from '@storybook/addon-notes';
import { withMarkdownNotes } from '../.storybook/addons/notes';
import WithStorySource from '../.storybook/addons/storysource/WithStorySource';

import GettingStarted from '../src/getting-started';
import GettingStartedReadme from '../src/getting-started/README.md';
import GettingStartedContent from '!!raw-loader!../src/getting-started';

storiesOf('React JSS', module)
.addDecorator(withMarkdownNotes(GettingStartedReadme))
.add('1. Getting Started', () =>(
  <WithStorySource storysource={GettingStartedContent}>
    <GettingStarted />
  </WithStorySource>
));
