import React from 'react';
import addons from '@storybook/addons';
import Notes from './Notes';

addons.register('storybook/notes', api => {
  const channel = addons.getChannel();
  addons.addPanel('storybook/notes/panel', {
    title: 'README',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => <Notes channel={channel} api={api} active={active} />,
  });
});
