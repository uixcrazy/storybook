import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleCSS from '../nopacks/multi-colored-svg/simple-css';
import DemoIconUmbrella from '../nopacks/multi-colored-svg/icon-umbrella';

storiesOf('Multi-Colored SVG', module)
  .add('Simple CSS', () => <SimpleCSS />)
  .add('Demo Icon Umbrella', () => <DemoIconUmbrella />)
