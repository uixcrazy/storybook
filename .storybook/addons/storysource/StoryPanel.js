import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { monoFonts } from '@storybook/components';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { coy } from 'react-syntax-highlighter/styles/prism';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import { createElement } from 'react-syntax-highlighter';
import { ADD_SOURCE_EVENT } from './constants';

// TODO: take from theme
const highlighterTheme = {
  ...coy,
  'pre[class*="language-"]': {
    ...coy['pre[class*="language-"]'],
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
    ...coy['code[class*="language-"]'],
    margin: 0,
    fontFamily: 'inherit',
    paddingLeft: 12,
    paddingTop: 10,
  },
};

registerLanguage('jsx', jsx);

const styles = {
  story: {
    display: 'block',
    textDecoration: 'none',
    color: coy['code[class*="language-"]'].color,
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
    const { active } = this.props;
    return active ? (
      <SyntaxHighlighter
        language="jsx"
        showLineNumbers="true"
        style={highlighterTheme}
        renderer={this.lineRenderer}
        customStyle={styles.panel}
      >
        {this.state.source}
      </SyntaxHighlighter>
    ) : null;
  }
}

StoryPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  api: PropTypes.shape({
    selectStory: PropTypes.func.isRequired,
  }).isRequired,
  channel: PropTypes.shape({
    emit: PropTypes.func,
    on: PropTypes.func,
    removeListener: PropTypes.func,
  }).isRequired,
};
