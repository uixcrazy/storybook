import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchBox01 from '../packages/searchbox/src/SearchBox01';
import SearchBox02 from '../packages/searchbox/src/SearchBox02';
import SearchBox03 from '../packages/searchbox/src/SearchBox03';

storiesOf('Search Box', module)
  .add('SearchBox01', () => <SearchBox01 />)
  .add('SearchBox02', () => <SearchBox02 />)
  .add('SearchBox03', () => <SearchBox03 />);
