import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { monoFonts } from '@storybook/components';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { darcula } from 'react-syntax-highlighter/styles/prism';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import { createElement } from 'react-syntax-highlighter';
import { ADD_SOURCE_EVENT } from './constants';

// TODO: take from theme
const highlighterTheme = {
  ...darcula,
  'pre[class*="language-"]': {
    ...darcula['pre[class*="language-"]'],
    margin: 'auto',
    width: 'auto',
    height: 'auto',
    minHeight: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    fontFamily: monoFonts.fontFamily,
    fontSize: 'inherit',
  },
  'code[class*="language-"]': {
    ...darcula['code[class*="language-"]'],
    margin: 0,
    fontFamily: 'inherit',
  },
};

registerLanguage('jsx', jsx);

const styles = {
  story: {
    display: 'block',
    textDecoration: 'none',
    color: darcula['code[class*="language-"]'].color,
  },
  selectedStory: {
    backgroundColor: 'rgba(255, 242, 60, 0.2)',
  },
  panel: {
    width: '100%',
    fontSize: 13,
  },
};

export default class StoryPanel extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      source: '// Here will be 😎 Nogc',
    };
    this.onAddStorysource = this.onAddStorysource.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on(ADD_SOURCE_EVENT, this.onAddStorysource);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddStorysource('');
    });
  }

  onAddStorysource(storysource) {
    this.setState({
      source: storysource,
    });
  }

  createPart = (rows, stylesheet, useInlineStyles) =>
    rows.map((node, i) =>
      createElement({
        node,
        stylesheet,
        useInlineStyles,
        key: `code-segement${i}`,
      })
    );

  lineRenderer = ({ rows, stylesheet, useInlineStyles }) =>
    <span>{this.createPart(rows, stylesheet, useInlineStyles)}</span>

  render() {
    return (
      <SyntaxHighlighter
        language="jsx"
        showLineNumbers="true"
        style={highlighterTheme}
        renderer={this.lineRenderer}
        customStyle={styles.panel}
      >
        {this.state.source}
      </SyntaxHighlighter>
    )
  }
}

StoryPanel.propTypes = {
  api: PropTypes.shape({
    selectStory: PropTypes.func.isRequired,
  }).isRequired,
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }).isRequired,
};
