import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Demo from '../components/demo/App';

import SimpleDropdown from '../components/dropdown/SimpleDropdown';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('Demo', module).add('create React App', () => <Demo />);

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

storiesOf('Dropdown', module).add('basic', () =>
  <SimpleDropdown actionChangeItem={actionChangeItem} items={ITEMS}/>);
