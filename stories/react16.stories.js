import React from 'react';
import { storiesOf } from '@storybook/react';
import SayHello from '../nopacks/react16/SayHello';
import ErrorBoundary from '../nopacks/react16/ErrorBoundary';
import ErrorEvent from '../nopacks/react16/ErrorEvent';
import App from '../nopacks/react16-context/App';
import AppLegacy from '../nopacks/legacy-context/App';

const MyWidget = ({ content }) => content;

storiesOf('React16', module)
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
  .add('Context', () => <App />)
  .add('Legacy Context', () => <AppLegacy />)

