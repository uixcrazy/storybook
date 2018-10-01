import React, { Component } from 'react';
import ListPhotos from './SearchBox02/ListPhotos';
import { getData } from '../../../core/fetch-api';
import '../../../assets/styles/normalize.css';
import './SearchBox02.css';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: [],
  }

  getInfo = () => {
    getData({
      apiURL: 'https://api.unsplash.com',
      // change API /search?query=autumn&xp=&per_page=20
      endpoint: '/search',
      headers: {
        Authorization: 'Client-ID 9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251',
      },
      params: {
        query: this.state.query,
        xp: '',
        per_page: 10,
        page: 5,
      },
    })
      .then((data) => {
        this.setState({
          ...(data.errors
            ? { error: { message: data.errors.join(', ') } }
            : {
              items: data.photos.results,
              otherInfo: {
                totalCollections: data.collections.total,
                totalPhotos: data.photos.total,
                totalPhotographer: data.users.total,
                relatedSearches: data.related_searches,
              },
            }
          ),
        });
      })
      .catch(() => this.setState({ error: true }));
  }

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

  // {/* <form> */} {/* </form> */}
  render() {
    return (
      <div className="container">
        <input type="text"
          placeholder="What are you looking for?"
          ref={(input) => { this.search = input; }}
          onChange={this.handleInputChange}
        />
        <div className="suggestions">
          <ListPhotos
            isLoaded={true}
            listPhotos={this.state.items}
            handleClickTag={this.handleClickTag}
          />
        </div>
      </div>
    );
  }
}

export default Search;
