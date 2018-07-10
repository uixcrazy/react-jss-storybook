import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';
import WithStorySource from '../.storybook/addons/storysource/WithStorySource';

import GettingStarted from '../src/getting-started';
import GettingStartedReadme from '../src/getting-started/README.md';
import GettingStartedDocs from '../src/getting-started/DOCS.md';
import GettingStartedContent from '!!raw-loader!../src/getting-started';

storiesOf('React JSS', module)
.addDecorator(withDocs(GettingStartedDocs))
.addDecorator(withReadme(GettingStartedReadme))
.add('1. Getting Started', () =>(
  <WithStorySource storysource={GettingStartedContent}>
    <GettingStarted />
  </WithStorySource>
));
