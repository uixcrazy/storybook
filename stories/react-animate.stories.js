import React from 'react';
import { storiesOf } from '@storybook/react';

import WithNotes from '../.storybook/addons/notes/WithNotes';
import AnimateOnChangeReadme
  from '../packages/react-animate/readme/react-animate-on-change.md';
import Example02Readme
  from '../packages/react-animate/readme/example-02.md';
import IhatetomatoesReadme
  from '../packages/react-animate/readme/ihatetomatoes.md';
import CSSTransitionReadme
  from '../packages/react-animate/readme/css-transition.md';


import AnimateOnChangeEg
  from '../packages/react-animate/examples/ex01.eg';
import Example02
  from '../packages/react-animate/examples/ex02.eg';
import IhatetomatoesEg
  from '../packages/react-animate/examples/Ihatetomatoes';
import CSSTransitionEg
  from '../packages/react-animate/examples/css-transition.eg';

const Ex01 = () => (
  <WithNotes notes={AnimateOnChangeReadme}>
    <AnimateOnChangeEg />
  </WithNotes>
);

const Ex02 = () => (
  <WithNotes notes={Example02Readme}>
    <Example02 />
  </WithNotes>
);

const Ihatetomatoes = () => (
  <WithNotes notes={IhatetomatoesReadme}>
    <IhatetomatoesEg />
  </WithNotes>
);

const CSSTransition = () => (
  <WithNotes notes={CSSTransitionReadme}>
    <CSSTransitionEg />
  </WithNotes>
);

storiesOf('React Animation', module)
  .add('AnimateOnChange', () => <Ex01 />)
  .add('Example 02', () => <Ex02 />)
  .add('Ihatetomatoes', () => <Ihatetomatoes />)
  .add('CSSTransition', () => <CSSTransition />)
