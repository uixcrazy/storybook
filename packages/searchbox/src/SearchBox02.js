import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './SearchBox02/Suggestions';

const API_URL = 'https://api.unsplash.com/search';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: [],
  }

  // fetch('https://api.unsplash.com/search?query=autumn&xp=&per_page=10&page=5&client_id=9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251').then(response => response.json()).then((jsonData) => {
  //   console.log('using a client_id query parameter:', jsonData);
  // });

  getInfo = () => {
    axios.get(`${API_URL}?query=${this.state.query}&xp=&per_page=10&page=5&client_id=9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251`)
      .then(({ data }) => {
        this.setState({
          results: data.photos.results,
        });
      })
      .catch(() => this.setState({ error: true }));
  }

  // autumn

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    });
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
