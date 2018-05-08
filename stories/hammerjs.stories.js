import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Layout from '../core/ui/layout';

import TouchSliderHammer from '../packages/hammerjs/src/TouchSliderHammer';
import NavigationHammerEg from '../packages/hammerjs/examples/NavigationHammer.eg';

const panelStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  color: 'white',
};

const mockStoriesPanel = () => <div style={{ ...panelStyle, background: '#4abdac' }}
  >Stories</div>;
const mockAddonPanel = () => <div style={{ ...panelStyle, background: '#fc4a1a' }}>Addon</div>;
const mockPreviewPanel = () =>
  <div style={{ ...panelStyle, background: '#f7b733' }}><NavigationHammerEg /></div>;

storiesOf('hammerjs', module)
  .add('Touch Slider', () => <TouchSliderHammer />)
  .add('Nav Slider', () => <Layout
    showStoriesPanel
    showAddonPanel
    goFullScreen={false}
    addonPanelInRight
    storiesPanel={mockStoriesPanel}
    addonPanel={mockAddonPanel}
    preview={mockPreviewPanel}
  />
)
