import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import loadjs from 'loadjs';
import debounce from 'lodash.debounce';
// import Router from 'next/router';

import SearchIcon from '@material-ui/icons/Search';
import PlaceIcon from '@material-ui/icons/Place';
import styles from './SearchBox.style';
import { isEmpty } from '../../../../utils/utilities';


const GMAP_API_KEY = 'AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadAutoComplete = debounce(this.loadAutoComplete.bind(this), 1000);
    this.selectPrediction = this.selectPrediction.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.state = {
      predictions: [],
      predictionSelected: null,
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
    // console.log('handleSubmit', this.searchVal.value); -> support other search types
    this.getSearch();
  }

  selectPrediction(predictionSelected) {
    // setState(stateChange[, callback])
    this.setState({
      predictionSelected,
    }, () => {
      this.getSearch();
    });
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
            predictions,
            predictionSelected: predictions[0],
          });
        }
      );
    } else {
      this.setState({
        predictions: [],
      });
    }
  }

  renderSuggestions() {
    const { classes } = this.props;
    const { predictions, predictionSelected } = this.state;
    return (
      <ul className={classes.predictions}>
        {predictions.length > 0 && predictions.map((prd, index) => (
          <li key={index}
            className={`${classes.predictionsItem}
            ${prd.place_id === predictionSelected.place_id ? classes.predictionsItemActive : ''}`}
            onClick={() => {
              this.selectPrediction(prd);
            }}
          >
            <div className={classes.prdIcon}>
              <PlaceIcon className={classes.placeIcon} />
            </div>
            <div className={classes.prdCt}>
              <span className={classes.mainText}>
                {prd.structured_formatting.main_text}
              </span>
              <span className={classes.secondaryText}>
                {prd.structured_formatting.secondary_text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  getSearch() {
    const { predictionSelected } = this.state;
    if (predictionSelected) {
      this.getPlaceDetails(predictionSelected.place_id).then((place) => {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        console.log(lat, lng);
        // Router.push(`/q/${this.searchVal.value}?lat=${lat}&lon=${lng}`);
      });
    }
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
            resolve(place);
          }
        }
      );
    });
  }

  render() { // Từ Khoá Hot || Lịch Sử Tìm Kiếm
    const { classes, placeholder } = this.props;
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
            placeholder={placeholder}
            type="search"
          />
        </form>
        <div className={classes.suggestions}>
	        {this.renderSuggestions()}
        </div>
      </Fragment>
    );
  }
}

SearchBox.defaultProps = {
  placeholder: 'search...',
};

SearchBox.propTypes = {
  classes: PropTypes.object,
  placeholder: PropTypes.string,
};

export default injectSheet(styles)(SearchBox);
