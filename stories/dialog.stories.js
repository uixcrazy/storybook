import React from 'react';
import { storiesOf } from '@storybook/react';
// import WithNotes from '../.storybook/addons/notes/WithNotes';

// import BasicDialogReadme
//   from '../nopacks/dialog/readme/README_BASIC.md';

import BasicDialogEg from '../nopacks/dialog/examples/BasicDialog.eg';
import BasicDialogEg2 from '../nopacks/dialog/examples/BasicDialog2.eg';

storiesOf('Dialog', module)
  .add('Basic', () => (
    <div>
      <BasicDialogEg />
      <BasicDialogEg2 />
      <BasicDialogEg2 />
      <BasicDialogEg2 />
      <BasicDialogEg2 />
    </div>
  ))
