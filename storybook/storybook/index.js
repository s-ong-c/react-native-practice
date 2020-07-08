import './rn-addons';

import { configure, getStorybookUI } from '@storybook/react-native';

configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

// const darkTheme = {
//   backgroundColor: 'black',
//   headerTextColor: 'white',
//   labelColor: 'white',
//   borderColor: 'white',
//   previewBorderColor: 'gray',
//   buttonTextColor: 'white',
//   buttonActiveTextColor: 'white',
// };

// const StorybookUIRoot = getStorybookUI({ theme: darkTheme });

const StorybookUIRoot = getStorybookUI({
  asyncStorage: false,
});
export default StorybookUIRoot;
