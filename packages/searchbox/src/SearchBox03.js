import React, { Fragment } from 'react';
import loadjs from 'loadjs';
import debounce from 'lodash.debounce';

// Từ Khoá Hot
// Lịch Sử Tìm Kiếm

// https://github.com/googlemaps/google-maps-services-js/blob/master/spec/e2e/places-spec.js
// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?region=VN&language=vi-VN&key=AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo&libraries=places&callback=initAutocomplete"
// async defer></script>

const GMAP_API_KEY = 'AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    // this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadAutoComplete = debounce(this.loadAutoComplete.bind(this), 1000);
  }

  componentDidMount() {
    // lat: 10.7890511, lng: 106.7031739
    loadjs(
      [
        `https://maps.googleapis.com/maps/api/js?key=${GMAP_API_KEY}&libraries=places&region=VN&language=vi-VN`,
      ],
      () => {
        this.bound = new google.maps.LatLngBounds(
          new google.maps.LatLng(10.611725943176097, 106.48552346292001),
          new google.maps.LatLng(10.971052056823904, 106.85131853707992)
        );
        this.service = new google.maps.places.AutocompleteService();
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.searchVal.value);
  }

  loadAutoComplete() {
    const kw = this.searchVal.value;
    this.service.getQueryPredictions(
      { input: kw, bounds: this.bound },
      (predictions, status) => {
        if (status != google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }

        console.info("autosuggest", predictions);
      }
    );
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="What are you looking for?"
            ref={(input) => { this.searchVal = input; }}
            onChange={this.loadAutoComplete}
          />
        </form>
        <div className="suggestions">
          aaa
        </div>
        <div className='search-input'>sgdf</div>
      </Fragment>
    );
  }
}

export default SearchBar;
// https://github.com/SanderKnape/reactjs-google-maps
// docs here: https://sanderknape.com/2017/07/integrating-reactjs-google-maps-widget/

// có thể phải xem tới cái này
// https://medium.com/@hamza.qaisrani.hq/using-the-google-maps-places-autocomplete-javascript-api-in-a-react-project-5742bab4abc9
