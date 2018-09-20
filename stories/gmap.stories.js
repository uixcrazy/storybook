import React from 'react';
import { storiesOf } from '@storybook/react';

import ReactGoogleMaps from '../packages/gmap/src/ReactGoogleMaps';

storiesOf('Google Maps', module)
  .add('Basic', () => <ReactGoogleMaps />);
