import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import loadjs from 'loadjs';
import debounce from 'lodash.debounce';
// import Router from 'next/router';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PlaceIcon from '@material-ui/icons/Place';
import HistoryIcon from '@material-ui/icons/History';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from './SearchBox.style';
import { isEmpty } from '../../../../utils/utilities';

const GMAP_API_KEY = 'AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadAutoComplete = debounce(this.loadAutoComplete.bind(this), 1000);
    this.resetSearchInput = this.resetSearchInput.bind(this);
    this.selectPrediction = this.selectPrediction.bind(this);
    this.getSearch = this.getSearch.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.state = {
      showSuggestions: false,
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
    this.resetSearchInput();
    // console.log('handleSubmit', this.searchRef.value); -> support other search types
    this.getSearch();
  }

  resetSearchInput() {
    this.searchRef.blur();
    this.searchRef.value = '';
    this.setState({
      showSuggestions: false,
    });
    this.props.handleFocus(false);
  }

  handleFocus() {
    this.setState({
      showSuggestions: true,
    });
    this.props.handleFocus(true);
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
    const kw = this.searchRef.value;
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

  getSearch() {
    const { predictionSelected } = this.state;
    if (predictionSelected) {
      this.getPlaceDetails(predictionSelected.place_id).then((place) => {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const url = `/q/${this.searchRef.value}?lat=${lat}&lon=${lng}`;
        // Router.push(`/q/${this.searchRef.value}?lat=${lat}&lon=${lng}`);

        const newHistory = {
          name: predictionSelected.structured_formatting.main_text,
          url,
        };
        const historyJSON = localStorage.getItem('lv-search-keyword');
        const history = JSON.parse(historyJSON);
        const limitNo = 5;
        if (history && history.length > 0) {
          history.push(newHistory);
          if (history.length > limitNo) {
            history.splice(0, history.length - limitNo);
          }
          localStorage.setItem('lv-search-keyword', JSON.stringify(history));
        } else {
          localStorage.setItem('lv-search-keyword', JSON.stringify([newHistory]));
        }
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

  renderPredictions() {
    const { classes } = this.props;
    const { predictions, predictionSelected } = this.state;
    return (
      <ul className={classes.predictions}>
        {predictions.length > 0 && predictions.map((prd, index) => (
          <li key={index}
            className={`${classes.prdItem}
            ${prd.place_id === predictionSelected.place_id ? classes.prdItemActive : ''}`}
            onClick={() => {
              this.selectPrediction(prd);
            }}
          >
            <div className={classes.prdIcon}>
              <PlaceIcon className={classes.prdIconIco} />
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

  renderHotKeywords() {
    const { classes, hotKeywords } = this.props;
    if (hotKeywords && hotKeywords.length > 0) {
      return (
        <div className={classes.suggestBox}>
          <p className={classes.prdTitle}>Từ Khoá Hot</p>
          <ul className={classes.tagList}>
            {hotKeywords.map((item, index) => (
              <li key={index}
                className={classes.tagItem}
                onClick={() => {
                  console.log(item.url);
                  // if (item.url) {
                  //   Router.push(item.url);
                  // }
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  }

  renderHistory() {
    const { classes } = this.props;
    const historyJSON = localStorage.getItem('lv-search-keyword');
    const history = JSON.parse(historyJSON);
    if (history && history.length > 0) {
      return (
        <div className={classes.suggestBox}>
          <p className={classes.prdTitle}>Lịch Sử Tìm Kiếm</p>
          <ul className={classes.history}>
            {history.map((item, index) => (
              <li key={index}
                className={classes.prdItem}
                onClick={() => {
                  console.log(item.url);
                  // if (item.url) {
                  //   Router.push(item.url);
                  // }
                }}
              >
                <div className={classes.prdIcon}>
                  <HistoryIcon className={classes.prdIconIco} />
                </div>
                <div className={classes.prdCt}>
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  }

  render() {
    const { classes, placeholder } = this.props;
    const { showSuggestions } = this.state;
    return (
      <Fragment>
        <form className={classes.searchBox} onSubmit={this.handleSubmit}>
          <div className={showSuggestions ? classes.back : classes.backHiden}>
            <IconButton
              className={classes.btnBlurSearch}
              onClick={this.resetSearchInput}>
              <ArrowBackIcon className={classes.arrowBackIcon}/>
            </IconButton>
          </div>
          <SearchIcon className={classes.searchIcon}/>
          <input
            className={classes.searchInput}
            ref={(input) => {
              this.searchRef = input;
            }}
            onFocus={this.handleFocus}
            onBlur={this.resetSearchInput}
            onChange={this.loadAutoComplete}
            placeholder={placeholder}
            autofocus={false}
            type="search"
          />
        </form>
        <div className={classes.suggestions}>
          <Collapse in={showSuggestions}
            classes={{
              container: classes.collapseContainer,
            }}
          >
            {this.renderPredictions()}
            {this.renderHotKeywords()}
            {this.renderHistory()}
          </Collapse>
        </div>
      </Fragment>
    );
  }
}

SearchBox.defaultProps = {
  placeholder: 'search...',
  hotKeywords: [
    {
      name: 'quả táo kimura',
      url: '/q/quả%20táo%20kimura?lat=10.7747098&lon=106.7043109',
    },
    {
      name: 'thien nga den',
      url: '/q/thien%20nga%20den?lat=10.7747098&lon=106.7043109',
    },
  ],
};

SearchBox.propTypes = {
  classes: PropTypes.object,
  placeholder: PropTypes.string,
  hotKeywords: PropTypes.array,
  handleFocus: PropTypes.func,
};

export default injectSheet(styles)(SearchBox);
