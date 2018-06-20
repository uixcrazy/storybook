import React from 'react';

import { storiesOf } from '@storybook/react';
import App from "../src/App";

storiesOf("App", module)
  .add("default", () => <App />);

import '../core/stylesheets/normalize.css';
import './common.css';

import './react16.stories';
import './layout.stories';
import './dropdown.stories';
import './atlaskit.stories';
import './translation-i18n.stories';
import './hammerjs.stories';
import './multi-colored-svg.stories';
