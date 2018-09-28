import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import demoFancyMapStyles from './demoFancyMapStyles.json';

const MapWithAMarker = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={props.center}
    defaultOptions={{ styles: demoFancyMapStyles }}
  >
    <InfoBox
      defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)} // eslint-disable-line
      options={{ closeBoxURL: '', enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: '12px' }}>
        <div style={{ fontSize: '16px', fontColor: '#08233B' }}>
          Hello, HO CHI Minh city!
        </div>
      </div>
    </InfoBox>
    <Marker
      position={props.center}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: '', enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: '12px' }}>
          <div style={{ fontSize: '16px', fontColor: '#08233B' }}>
            Hello, Kaohsiung!
          </div>
        </div>
      </InfoBox>}
    </Marker>
  </GoogleMap>
)));

export default class StyledMapWithAnInfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return <MapWithAMarker
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDxOgJ-NH-JRJ54rDbP4ZxB52ATJGcBvpo&libraries=geometry,drawing,places'
      loadingElement= {<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      center={{ lat: 10.7890511, lng: 106.7031739 }}
      onToggleOpen={this.onToggleOpen}
    />;
  }
}
