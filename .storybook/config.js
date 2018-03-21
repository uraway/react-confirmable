import 'babel-polyfill';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React Confirm Decorator',
  downPanelInRight: true,
  sidebarAnimations: true,
});

const req = require.context('../src/components', true, /.story.js$/);

configure(() => {
  req.keys().forEach(req);
}, module);
