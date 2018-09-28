import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';
import demoFancyMapStyles from './demoFancyMapStyles.json';

const MapWithAMarkerWithLabel = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={18}
    defaultCenter={props.center}
    defaultOptions={{ styles: demoFancyMapStyles }}
  >
    <MarkerWithLabel
      position={props.center}
      labelAnchor={new google.maps.Point(0, 0)} // eslint-disable-line
      labelStyle={{
        backgroundColor: '#fff',
        border: '5px solid #ccc',
        fontSize: '18px',
        padding: '16px',
      }}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>
  </GoogleMap>
)));

const MarkerWithLabelDemo = () => (
  <MapWithAMarkerWithLabel
    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo&libraries=geometry,drawing,places'
    loadingElement= {<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    center={{ lat: 10.7890511, lng: 106.7031739 }}
  />
);

export default MarkerWithLabelDemo;
