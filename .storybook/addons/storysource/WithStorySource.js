import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';
import { ADD_SOURCE_EVENT } from './constants';

class WithStorySource extends React.Component {
  render() {
    const { children, storysource } = this.props;
    const channel = addons.getChannel();
    channel.emit(ADD_SOURCE_EVENT, storysource);
    return children;
  }
}

WithStorySource.defaultProps = {
  children: null,
  storysource: '',
};

WithStorySource.propTypes = {
  children: PropTypes.node,
  storysource: PropTypes.string,
};

export default WithStorySource;
