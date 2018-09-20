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
import CarouselSimpleReadme
  from '../packages/slider/readme/CarouselSimple.md';

import HammerSliderEg
  from '../packages/slider/examples/HammerSlider.eg';
import HammerSliderCarouselEg
  from '../packages/slider/examples/HammerSliderCarousel.eg';
import SliderSimpleEg
  from '../packages/slider/examples/SliderSimple.eg';
import CarouselSimpleEg
  from '../packages/slider/examples/CarouselSimple.eg';

import '../assets/styles/normalize.css';
import '../assets/styles/nothing-reset.css';

const HammerSlider = () => (
  <WithNotes notes={HammerSliderReadme}>
    <ThemeProvider theme={theme}>
      <HammerSliderEg />
    </ThemeProvider>
  </WithNotes>
);

const HammerSliderCarousel = () => (
  <WithNotes notes={HammerSliderCarouselReadme}>
    <ThemeProvider theme={theme}>
      <HammerSliderCarouselEg />
    </ThemeProvider>
  </WithNotes>
);

const SliderSimple = () => (
  <WithNotes notes={SliderSimpleReadme}>
    <ThemeProvider theme={theme}>
      <SliderSimpleEg />
    </ThemeProvider>
  </WithNotes>
);

// CarouselSimpleEg
const CarouselSimple = () => (
  <WithNotes notes={CarouselSimpleReadme}>
    <ThemeProvider theme={theme}>
      <CarouselSimpleEg />
    </ThemeProvider>
  </WithNotes>
);

storiesOf('Slider - Carousel', module)
  .add('Carousel', () => <CarouselSimple />)
  .add('Slider', () => <SliderSimple />)
  .add('Hammer Slider', () => <HammerSlider />)
  .add('Hammer Slider Carousel', () => <HammerSliderCarousel />)
