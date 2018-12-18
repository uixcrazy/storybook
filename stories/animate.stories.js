import React from 'react';
import { storiesOf } from '@storybook/react';

import WithNotes from '../.storybook/addons/notes/WithNotes';
import AnimateOnChangeReadme
  from '../packages/animate/readme/react-animate-on-change.md';

import AnimateOnChangeEg
  from '../packages/animate/examples/ex01.eg';

const Ex01 = () => (
  <WithNotes notes={AnimateOnChangeReadme}>
    <AnimateOnChangeEg />
  </WithNotes>
);

storiesOf('React Animation', module)
  .add('AnimateOnChange', () => <Ex01 />)
