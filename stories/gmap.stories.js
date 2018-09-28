import React from 'react';
import { storiesOf } from '@storybook/react';

import ReactGoogleMaps from '../packages/gmap/src/ReactGoogleMaps';
import StyledMapWithAnInfoBox from '../packages/gmap/src/StyledMapWithAnInfoBox';
import MarkerWithLabelDemo from '../packages/gmap/src/MarkerWithLabelDemo';
import SearchBoxDemo from '../packages/gmap/src/SearchBoxDemo';

storiesOf('Google Maps', module)
  .add('Basic', () => <ReactGoogleMaps />)
  .add('A wrapper around InfoBox', () => <StyledMapWithAnInfoBox />)
  .add('Map with a MarkerWithLabel', () => <MarkerWithLabelDemo />)
  .add('Map with a SearchBox', () => <SearchBoxDemo />)
