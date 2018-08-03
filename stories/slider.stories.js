import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'react-jss';
import { theme } from '../packages/slider/examples/styles/variables.style';

// import { withMarkdownNotes } from '../.storybook/addons/notes';
import WithNotes from '../.storybook/addons/notes/WithNotes';
// import WithStorySource from '../.storybook/addons/storysource/WithStorySource';
import HammerSliderReadme
  from '../packages/slider/readme/HammerSlider.md';
import HammerSliderCarouselReadme
  from '../packages/slider/readme/HammerSliderCarousel.md';
import SliderSimpleReadme
  from '../packages/slider/readme/SliderSimple.md';

import HammerSliderEg
  from '../packages/slider/examples/HammerSlider.eg.js';
import HammerSliderCarouselEg
  from '../packages/slider/examples/HammerSliderCarousel.eg';
import SliderSimpleEg
  from '../packages/slider/examples/SliderSimple.eg';
  // SliderSimple

import '../assets/styles/normalize.css';
import '../assets/styles/nothing-reset.css';

const HammerSlider = () => (
  <WithNotes notes={HammerSliderReadme}>
    <ThemeProvider theme={theme}>
      <HammerSliderEg />
    </ThemeProvider>
  </WithNotes>
)

const HammerSliderCarousel = () => (
  <WithNotes notes={HammerSliderCarouselReadme}>
    <ThemeProvider theme={theme}>
      <HammerSliderCarouselEg />
    </ThemeProvider>
  </WithNotes>
)

const SliderSimple = () => (
  <WithNotes notes={SliderSimpleReadme}>
    <ThemeProvider theme={theme}>
      <SliderSimpleEg />
    </ThemeProvider>
  </WithNotes>
)

storiesOf('Slider', module)
  .add('Hammer Slider', () => <HammerSlider />)
  .add('Hammer Slider Carousel', () => <HammerSliderCarousel />)
  .add('Slider Simple', () => <SliderSimple />)
