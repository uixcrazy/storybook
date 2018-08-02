import React from 'react';
import { ThemeProvider } from 'react-jss';
import { storiesOf } from '@storybook/react';
import '../assets/styles/normalize.css';
import '../assets/styles/nothing_reset.css';

import { theme } from '../packages/slider/examples/styles/variables.style';
import HammerSliderEg from '../packages/slider/examples/HammerSlider.eg.js';
import HammerSliderCarouselEg from '../packages/slider/examples/HammerSliderCarousel.eg';
// HammerSliderCarouselEg

const HammerSlider = () => (
  <ThemeProvider theme={theme}>
    <HammerSliderEg />
  </ThemeProvider>
)

const HammerSliderCarousel = () => (
  <ThemeProvider theme={theme}>
    <HammerSliderCarouselEg />
  </ThemeProvider>
)

storiesOf('Slider', module)
  .add('Hammer Slider', () => <HammerSlider />)
  .add('Hammer Slider Carousel', () => <HammerSliderCarousel />);
