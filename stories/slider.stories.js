import React from 'react';
import { storiesOf } from '@storybook/react';

import WithNotes from '../.storybook/addons/notes/WithNotes';
import SliderSimpleReadme
  from '../packages/slider/readme/SliderSimple.md';
import CarouselSimpleReadme
  from '../packages/slider/readme/CarouselSimple.md';

import SliderSimpleEg
  from '../packages/slider/examples/SliderSimple.eg';
import CarouselSimpleEg
  from '../packages/slider/examples/CarouselSimple.eg';

const SliderSimple = () => (
  <WithNotes notes={SliderSimpleReadme}>
    <SliderSimpleEg />
  </WithNotes>
);

const CarouselSimple = () => (
  <WithNotes notes={CarouselSimpleReadme}>
    <CarouselSimpleEg />
  </WithNotes>
);

storiesOf('Slider - Carousel', module)
  .add('Slider', () => <SliderSimple />)
  .add('Carousel', () => <CarouselSimple />);
