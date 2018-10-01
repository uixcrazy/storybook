import React from 'react';
import GoogleMaps from '@google/maps';
import Promise from 'promise';

const googleMapsClient = GoogleMaps.createClient({
  key: 'AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo',
  Promise,
});
// Từ Khoá Hot
// Lịch Sử Tìm Kiếm

// https://github.com/googlemaps/google-maps-services-js/blob/master/spec/e2e/places-spec.js

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
    // this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }

  componentDidMount() {
    // region=VN&language=vi-VN&key=
    // &libraries=places&callback=initAutocomplete
    // region: 'VN',
    // language: 'vi-VN',
    // libraries: 'places',
    googleMapsClient.places({
      query: 'fast food',
      language: 'en',
      location: [-33.865, 151.038],
      radius: 5000,
      minprice: 1,
      maxprice: 4,
      opennow: true,
      type: 'restaurant',
    })
      .asPromise()
      .then((response) => {
        console.log(response.json);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // handleScriptLoad() {
  //   this.autocomplete = googleMapsClient.placesAutoComplete(
  //     // /** @type {!HTMLInputElement} */
  //     (this.search), {
  //       types: ['geocode'],
  //       // types: ['(cities)'],
  //       componentRestrictions: { country: 'vn' },
  //     }
  //   );

  //   this.autocomplete.addListener('place_changed', () => {
  //     // Get the place details from the autocomplete object.
  //     const place = this.autocomplete.getPlace();
  //     console.log(place);
  //     console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
  //     console.log(place.address_components);
  //     console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
  //     console.log(place.geometry.location.lat(), place.geometry.location.lng());
  //   });
  // }

  render() {
    return (
      <div className="container">
        <input type="text"
          placeholder="What are you looking for?"
          ref={(input) => { this.search = input; }}
          onChange={this.handleInputChange}
        />
        <div className="suggestions">
          aaa
        </div>
      </div>
    );
  }
}

export default SearchBar;
// https://github.com/SanderKnape/reactjs-google-maps
// docs here: https://sanderknape.com/2017/07/integrating-reactjs-google-maps-widget/

// có thể phải xem tới cái này
// https://medium.com/@hamza.qaisrani.hq/using-the-google-maps-places-autocomplete-javascript-api-in-a-react-project-5742bab4abc9
