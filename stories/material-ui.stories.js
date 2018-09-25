import React from 'react';
import { storiesOf } from '@storybook/react';

import FormDemo01 from '../packages/material-ui/src/FormDemo01';

storiesOf('MATERIAL-UI', module)
  .add('demo form', () => <FormDemo01 />);
