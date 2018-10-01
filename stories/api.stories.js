import React from 'react';
import { storiesOf } from '@storybook/react';

import AxiosDemo from '../packages/API/src/AxiosDemo';

storiesOf('API', module)
  .add('Axios Demo', () => <AxiosDemo />)
