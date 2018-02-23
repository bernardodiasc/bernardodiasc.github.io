import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../public/styles/main.css';

setOptions({
  name: 'Bernardo Dias da Cruz',
  url: 'https://bernrdodiasc.github.io/',
  // goFullScreen: false,
  // showStoriesPanel: true,
  // showAddonPanel: true,
  // showSearchBox: false,
  // addonPanelInRight: true,
  // sortStoriesByKind: false,
  // hierarchySeparator: null,
  // hierarchyRootSeparator: null,
  // sidebarAnimations: true,
  // selectedAddonPanel: undefined,
});

function loadStories() {
  require('../src/stories/index.js');
  require('../src/stories/contents.js');
  require('../src/stories/screens.js');
  require('../src/stories/displays.js');
}

configure(loadStories, module);
