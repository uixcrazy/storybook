import React, { Component } from 'react';
import axios from 'axios';
import ListPhotos from '../../searchbox/src/SearchBox02/ListPhotos';
import '../../../assets/styles/normalize.css';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = 'Client-ID 9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251'; // eslint-disable-line
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

class AxiosDemo extends Component {
  state = {
    error: false,
    query: '',
    results: [],
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    axios.get('/search?query=autumn&xp=&per_page=10&page=5')
      .then(({ data }) => {
        this.setState({
          photos: data.photos.results,
        });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    return (
      <div className="container">
        <ListPhotos
          isLoaded={true}
          listPhotos={this.state.photos}
        />
      </div>
    );
  }
}

export default AxiosDemo;
