import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import { ADD_NOTES_EVENT } from './constants';

const WithNotes =  ({children, notes }) => {
  const channel = addons.getChannel();
  channel.emit(ADD_NOTES_EVENT, notes);
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
