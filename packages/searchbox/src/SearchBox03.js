import React, { Fragment } from 'react';
import loadjs from 'loadjs';
import debounce from 'lodash.debounce';
import injectSheet from 'react-jss';
import SearchIcon from "@material-ui/icons/Search";
import styles from './SearchBox03.style';
import { isEmpty } from '../../../utils/utilities';

// Từ Khoá Hot || Lịch Sử Tìm Kiếm

const GMAP_API_KEY = 'AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadAutoComplete = debounce(this.loadAutoComplete.bind(this), 1000);
    this.state = {
      suggestions: [],
    };
  }

  componentDidMount() {
    loadjs(
      [
        `https://maps.googleapis.com/maps/api/js?key=${GMAP_API_KEY}&libraries=places`,
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
    if (!isEmpty(kw)) {
      this.service.getPlacePredictions(
        { input: kw, bounds: this.bound },
        (predictions, status) => {
          if (status != google.maps.places.PlacesServiceStatus.OK) {
            console.error(status);
            return;
          }
          this.setState({
            suggestions: predictions,
          });
        }
      );
    }
  }

  showSuggestions() {
    console.log(this.state.suggestions);
    return (
      <ul>
        {this.state.suggestions.length > 0 && this.state.suggestions.map((suggestion, index) => (
          <li key={index}>
            <span>{suggestion.structured_formatting.main_text}</span>
            <span style={{ display: 'block', color: '#ccc' }}>{suggestion.structured_formatting.secondary_text}</span>
          </li>
        ))}
      </ul>
    );
  }

  getPlaceDetails(placeId) {
    const service = new window.google.maps.places.PlacesService(
      window.document.createElement('div')
    );
    return new Promise((resolve) => {
      service.getDetails(
        {
          placeId,
          fields: ['geometry'],
        },
        (place, status) => {
          if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            console.info(place, place.geometry.location.lat(), place.geometry.location.lat());
            resolve(place);
          }
        }
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <form className={classes.searchBox} onSubmit={this.handleSubmit}>
          <SearchIcon className={classes.searchIcon} />
          <input
            className={classes.searchInput}
            ref={(input) => {
              this.searchVal = input;
            }}
            onChange={this.loadAutoComplete}
            placeholder="Tìm kiếm"
            type="search"
          />
        </form>
        <div className={classes.suggestions}>
          {this.showSuggestions()}
        </div>
      </Fragment>
    );
  }
}

export default injectSheet(styles)(SearchBar);


// https://github.com/SanderKnape/reactjs-google-maps
// docs here: https://sanderknape.com/2017/07/integrating-reactjs-google-maps-widget/

// có thể phải xem tới cái này
// https://medium.com/@hamza.qaisrani.hq/using-the-google-maps-places-autocomplete-javascript-api-in-a-react-project-5742bab4abc9

// https://github.com/googlemaps/google-maps-services-js/blob/master/spec/e2e/places-spec.js
// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?region=VN&language=vi-VN&key=AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo&libraries=places&callback=initAutocomplete"
// async defer></script>

/**
 * https://developers.google.com/places/web-service/query
 *
 * https://stackoverflow.com/questions/25928948/get-lat-lang-from-a-place-id-returned-by-autocomplete-place-api
 * get latitude vs longitude
 * https://developers.google.com/places/web-service/details
 */
