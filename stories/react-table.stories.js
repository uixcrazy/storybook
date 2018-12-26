import React from 'react';
import { storiesOf } from '@storybook/react';

import Example01
  from '../packages/react-table/examples/example-01.eg';

storiesOf('React Table', module)
  .add('Basic', () => <Example01 />)
