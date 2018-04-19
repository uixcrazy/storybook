import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import BasicDropdown from '../components/dropdown/BasicDropdown';

const ITEMS = [
  { name: 'All Flowers' },
  { name: 'Chrysanthemum' },
  { name: 'Ixora' },
  { name: 'Wild Sunflower' },
  { name: 'Bougainvillaea' },
  { name: 'Rose' },
  { name: 'Jasmine' },
  { name: 'Orchids' },
]

function actionChangeItem(item) {
  console.log('click item', item);
}

storiesOf('Dropdown', module).add('Basic', () =>
  <BasicDropdown actionChangeItem={actionChangeItem} items={ITEMS}/>);
