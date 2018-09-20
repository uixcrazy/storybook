import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider } from 'react-jss';
import { theme } from '../packages/slider/examples/styles/variables.style';
import WithNotes from '../.storybook/addons/notes/WithNotes';
import SliderSimpleReadme
  from '../packages/slider/readme/SliderSimple.md';
import CarouselSimpleReadme
  from '../packages/slider/readme/CarouselSimple.md';

import SliderSimpleEg
  from '../packages/slider/examples/SliderSimple.eg';
import CarouselSimpleEg
  from '../packages/slider/examples/CarouselSimple.eg';

import '../assets/styles/normalize.css';
import '../assets/styles/nothing-reset.css';

const SliderSimple = () => (
  <WithNotes notes={SliderSimpleReadme}>
    <ThemeProvider theme={theme}>
      <SliderSimpleEg />
    </ThemeProvider>
  </WithNotes>
);

const CarouselSimple = () => (
  <WithNotes notes={CarouselSimpleReadme}>
    <ThemeProvider theme={theme}>
      <CarouselSimpleEg />
    </ThemeProvider>
  </WithNotes>
);

storiesOf('Slider - Carousel', module)
  .add('Slider', () => <SliderSimple />)
  .add('Carousel', () => <CarouselSimple />);
