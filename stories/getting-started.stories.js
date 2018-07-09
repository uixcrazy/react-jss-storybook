import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme, withDocs } from 'storybook-readme';

import GettingStarted from '../src/getting-started';
import ButtonReadme from '../src/getting-started/README.md';
import ButtonDocs from '../src/getting-started/DOCS.md';


storiesOf('React JSS', module)
.addDecorator(withDocs(ButtonDocs))
.addDecorator(withReadme(ButtonReadme))
.add('1. Getting Started', () => <GettingStarted />);
