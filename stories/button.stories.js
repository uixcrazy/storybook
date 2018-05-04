import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Button from '../packages/button/src';

storiesOf('Button Atlaskit', module)
 .add('Basic', () => <Button appearance="warning" isSelected>
Selected
</Button>);
storiesOf('Button Atlaskit', module)
 .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
 .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
