import React from 'react';
import addons from '@storybook/addons';
// import StorySourcePanel from './simple-ui/StorySourcePanel'; ⤌ simple
import StoryPanel from './StoryPanel';
import { ADDON_ID, PANEL_ID } from './constants';

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: 'SOURCE',
    render: ({ active }) => (
      <StoryPanel channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
