import React from 'react';
import '../assets/styles/normalize.css';
import '../assets/styles/nothing-reset.css';
import './slider.stories';
import './dropdown.stories';
import './hammerjs.stories';
import './gmap.stories';

import { storiesOf } from '@storybook/react';
import App from '../src/App';

storiesOf('App', module).add('default', () => <App />);

// import './react16.stories';
// import './layout.stories';
// import './translation-i18n.stories';
// import './multi-colored-svg.stories';
