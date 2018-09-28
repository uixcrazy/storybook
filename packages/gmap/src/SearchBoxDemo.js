import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapWithAMarker = withScriptjs(withGoogleMap((props) => {
  console.log(props);
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 10.7890511, lng: 106.7031739 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 10.7890511, lng: 106.7031739 }} />}
    </GoogleMap>
  );
}));

const SearchBoxDemo = () => (
  <MapWithAMarker
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);

export default SearchBoxDemo;
