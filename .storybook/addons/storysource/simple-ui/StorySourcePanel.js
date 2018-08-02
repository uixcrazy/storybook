import React from 'react';
import PropTypes from 'prop-types';
import { ADD_SOURCE_EVENT } from '../constants';

class StorySourcePanel extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      storysource: null,
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

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener(ADD_SOURCE_EVENT, this.onAddStorysource);
  }

  onAddStorysource(storysource) {
    this.setState({ storysource });
  }


  render() {
    const { storysource } = this.state;
    return (
      <div className="addon-storysource-container">
        <pre dangerouslySetInnerHTML={{ __html: storysource }} />
      </div>
    )
  }
}

StorySourcePanel.propTypes = {
  channel: PropTypes.shape({
    on: PropTypes.func,
    emit: PropTypes.func,
    removeListener: PropTypes.func,
  }).isRequired,
  api: PropTypes.shape({
    onStory: PropTypes.func,
    getQueryParam: PropTypes.func,
    setQueryParams: PropTypes.func,
  }).isRequired,
};

export default StorySourcePanel;
