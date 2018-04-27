import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../packages/button/src';

storiesOf('Button', module).add('Basic', () => <Button />);