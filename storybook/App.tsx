import './storybook/rn-addons';

import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';

import { setupGlobalDecorators } from './storybook/decorators';
import { withKnobs } from '@storybook/addon-knobs';

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require('./stories');
}, module);

setupGlobalDecorators();
addDecorator(withKnobs);
export default getStorybookUI();
