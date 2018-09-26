import React from 'react';
import { storiesOf } from '@storybook/react';

import FormDemo01 from '../packages/material-ui/src/FormDemo01';
import DialogDemo01Eg from '../packages/material-ui/examples/DialogDemo01.eg';

storiesOf('MATERIAL-UI', module)
  .add('form', () => <FormDemo01 />)
  .add('dialog', () => <DialogDemo01Eg />);
