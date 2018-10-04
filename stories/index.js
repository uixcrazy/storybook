import React from 'react';
import '../assets/styles/normalize.css';
import '../assets/styles/nothing-reset.css';

import './slider.stories';
import './dropdown.stories';
import './hammerjs.stories';
import './gmap.stories';
import './searchbox.stories';
import './material-ui.stories';
import './api.stories';

import { storiesOf } from '@storybook/react';
import App from '../nopacks/create-react-app/App';

storiesOf('create-react-app', module).add('default', () => <App />);

// import './react16.stories';
// import './layout.stories';
// import './translation-i18n.stories';
// import './multi-colored-svg.stories';
