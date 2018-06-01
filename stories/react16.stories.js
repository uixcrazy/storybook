import React from 'react';
import { storiesOf } from '@storybook/react';
import SayHello from '../nopacks/react16/SayHello';
import ErrorBoundary from '../nopacks/react16/ErrorBoundary';
import ErrorEvent from '../nopacks/react16/ErrorEvent';

const MyWidget = ({ content }) => content;

storiesOf('Dropdown', module)
  .add('Arrow Function', () => <SayHello />)
  .add('Portals', () => <div>Portals</div>)
  .add('ErrorBoundary', () => <div>
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>
    <ErrorBoundary>
      <MyWidget content="nogc"/>
    </ErrorBoundary>
  </div>)
  .add('ErrorEvent', () => <ErrorEvent />)
