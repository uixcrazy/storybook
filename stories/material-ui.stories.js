import React from 'react';
import { storiesOf } from '@storybook/react';

import FormDemo01 from '../packages/material-ui/src/FormDemo01';
import DialogDemo01Eg from '../packages/material-ui/examples/DialogDemo01.eg';
import Page01 from '../packages/material-ui/examples/Page01';
import Page02 from '../packages/material-ui/examples/Page02';
import Page03 from '../packages/material-ui/examples/Page03';

storiesOf('MATERIAL-UI', module)
  .add('form', () => <FormDemo01 />)
  .add('dialog', () => <DialogDemo01Eg />)
  .add('Page01', () => <Page01 />)
  .add('Page02', () => <Page02 />)
  .add('Page03', () => <Page03 />);
