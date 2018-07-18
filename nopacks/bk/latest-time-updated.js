/**
 * Created by daile on July 04, 18.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '../../../core/helper/sf-lib';

class LatestTimeUpdated extends Component {
  constructor(props) {
    super(props);
    i18n.locale = props.language;
    this.state = {
      periodLabel: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.updatedAt) !== JSON.stringify(nextProps.updatedAt)) {
      this.startTimer();
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    if (this.timer) clearInterval(this.timer); // reset

    const min = 60 * 1000; // a minute
    let count = 0;
    let periodLabel = i18n.t('justNow');
    this.setState({ periodLabel }); // at first time
    this.timer = setInterval(() => {
      periodLabel = `${i18n.t('upd')} ${count += 1} ${i18n.t('minsAgo')}`;
      this.setState({ periodLabel });
    }, min);
  }

  render() {
    return (
      <div className="sf-updated-time">
        {this.state.periodLabel}
      </div>
    );
  }
}

LatestTimeUpdated.defaultProps = {
  language: 'en',
  updatedAt: new Date(), // ⤑ new Date().getTime()
};

LatestTimeUpdated.propTypes = {
  language: PropTypes.string,
  updatedAt: PropTypes.object,
};

export default LatestTimeUpdated;
