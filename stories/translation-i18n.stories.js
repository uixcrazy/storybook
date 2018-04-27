import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicEg from '../packages/translation-i18n/examples/Basic.eg';

storiesOf('I18n', module).add('Basic Translation', () => <BasicEg />);
