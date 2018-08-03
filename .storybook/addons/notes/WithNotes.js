import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import marked from 'marked';
import { ADD_NOTES_EVENT } from './constants';

const renderMarkdown = (text, options) => {
  marked.setOptions({ ...marked.defaults, options });
  return marked(text);
}

const WithNotes =  ({children, notes, markdownOptions }) => {
  const channel = addons.getChannel();
  channel.emit(ADD_NOTES_EVENT, renderMarkdown(notes, markdownOptions));
  return children;
}

WithNotes.defaultProps = {
  children: null,
  notes: '',
};

WithNotes.propTypes = {
  children: PropTypes.node,
  notes: PropTypes.string,
};

export default WithNotes;
