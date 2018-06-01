import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Layout from '../core/ui/layout';

import TouchSliderHammer from '../packages/hammerjs/src/TouchSliderHammer';
import NavigationHammerEg from '../packages/hammerjs/examples/NavigationHammer.eg';

const panelStyle = {
  // position: 'absolute',
  height: '100%',
  width: '100%',
  color: 'white',
};

// '#f7b733'
const mockStoriesPanel = () => <div style={{ ...panelStyle, background: '#4abdac' }}>Stories</div>;
const mockAddonPanel = () => <div style={{ ...panelStyle, background: '#fc4a1a' }}>Addon</div>;
const mockPreviewPanel = () =>
  <div style={{ ...panelStyle, background: '#fff' }}>
    <NavigationHammerEg />
  </div>;

storiesOf('hammerjs', module)
  .add('Touch Slider', () => <TouchSliderHammer />)
  .add('Nav Slider Pure', () => <NavigationHammerEg />)
  .add('Nav Slider Pure three', () =>
    <div style={{ width: '100%' }}>
      <NavigationHammerEg />
      <NavigationHammerEg />
      <NavigationHammerEg />
    </div>)
  .add('Nav Slider', () => <Layout
    showStoriesPanel
    showAddonPanel={false}
    goFullScreen={false}
    addonPanelInRight={false}
    storiesPanel={mockStoriesPanel}
    addonPanel={mockAddonPanel}
    preview={mockPreviewPanel}
  />);
