import React from 'react';

import { storiesOf } from '@storybook/react';
import App from "../src/App";

storiesOf("App", module)
  .add("default", () => <App />);

import '../assets/styles/normalize.css';
import '../assets/styles/nothing-reset.css';

// import './react16.stories';
// import './layout.stories';
import './slider.stories';
import './dropdown.stories';
// import './translation-i18n.stories';
import './hammerjs.stories';
// import './multi-colored-svg.stories';
