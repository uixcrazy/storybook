import React from 'react';
import { storiesOf } from '@storybook/react';

import BasicEg from '../nopacks/translation-i18n/Basic.eg';

storiesOf('I18n', module).add('Basic Translation', () => <BasicEg />);
