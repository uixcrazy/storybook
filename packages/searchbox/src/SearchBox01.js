import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import emails from './SearchBox01/mails';
import attachRawCss from '../../../utils/attachRawCss';
import styles from '!!raw-loader!./SearchBox01/react-search-input.css'; // eslint-disable-line

const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name'];

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
      <div className="container">
        <SearchInput className='search-input' onChange={this.searchUpdated} />
        {filteredEmails.map(email => (
          <div className="mail" key={email.id}>
            <div className="from">{email.user.name}</div>
            <div className="subject">{email.subject}</div>
          </div>
        ))}
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}

export default attachRawCss(styles, 'SearchBox 01', SearchBox);
