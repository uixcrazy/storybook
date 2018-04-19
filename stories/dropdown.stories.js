import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import BasicDropdown from '../packages/dropdown/examples/BasicDropdown.eg';

storiesOf('Dropdown', module).add('Basic', () => <BasicDropdown />);
