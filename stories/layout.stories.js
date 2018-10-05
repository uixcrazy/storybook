import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '../utils/ui/layout';

const panelStyle = {
  // position: 'absolute',
  height: '100%',
  width: '100%',
  color: 'white',
};

const mockStoriesPanel = () => <div style={{ ...panelStyle, background: '#4abdac' }}>Stories</div>;
const mockAddonPanel = () => <div style={{ ...panelStyle, background: '#fc4a1a' }}>Addon</div>;
const mockPreviewPanel = () => <div style={{ ...panelStyle, background: '#f7b733' }}>Preview</div>;

// storiesOf('ui/Layout', module)
storiesOf('Layout', module)
  .add('default', () => (
    <Layout
      showStoriesPanel
      showAddonPanel
      goFullScreen={false}
      addonPanelInRight
      storiesPanel={mockStoriesPanel}
      addonPanel={mockAddonPanel}
      preview={mockPreviewPanel}
    />
  ))
  .add('full screen', () => (
    <Layout
      showStoriesPanel={false}
      showAddonPanel={false}
      goFullScreen
      addonPanelInRight={false}
      storiesPanel={mockStoriesPanel}
      addonPanel={mockAddonPanel}
      preview={mockPreviewPanel}
    />
  ))
  .add('no stories panel', () => (
    <Layout
      showStoriesPanel={false}
      showAddonPanel
      goFullScreen={false}
      addonPanelInRight
      storiesPanel={mockStoriesPanel}
      addonPanel={mockAddonPanel}
      preview={mockPreviewPanel}
    />
  ))
  .add('no addon panel', () => (
    <Layout
      showStoriesPanel
      showAddonPanel={false}
      goFullScreen={false}
      addonPanelInRight={false}
      storiesPanel={mockStoriesPanel}
      addonPanel={mockAddonPanel}
      preview={mockPreviewPanel}
    />
  ));
