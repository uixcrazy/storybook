import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import TouchSliderHammer from '../packages/hammerjs/src/TouchSliderHammer';

storiesOf('hammerjs', module)
  .add('Touch Slider', () => <TouchSliderHammer />)
