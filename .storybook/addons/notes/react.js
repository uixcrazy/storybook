import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import { ADD_NOTES_EVENT } from './constants';

export class WithNotes extends React.Component {
  render() {
    const { children, notes } = this.props;
    const channel = addons.getChannel();

    channel.emit(ADD_NOTES_EVENT, notes);

    return children;
  }
}

WithNotes.propTypes = {
  children: PropTypes.node,
  notes: PropTypes.string,
};
WithNotes.defaultProps = {
  children: null,
  notes: '',
};
