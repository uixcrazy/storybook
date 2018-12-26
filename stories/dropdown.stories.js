import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import WithNotes from '../.storybook/addons/notes/WithNotes';

import BasicDropdownReadme
  from '../nopacks/basic-dropdown/readme/README.md';

import BasicDropdownEg from '../nopacks/basic-dropdown/examples/BasicDropdown.eg';
import DropdownEg from '../nopacks/dropdown/examples/dropdown.eg';

storiesOf('Dropdown', module)
  .add('Basic', () => (
    <WithNotes notes={BasicDropdownReadme}>
      <BasicDropdownEg />
    </WithNotes>
  ))
  .add('Version 2', () => (
    <DropdownEg />
  ))
