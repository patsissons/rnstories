import { configure, getStorybookUI } from '@storybook/react-native';

export function createStorybookUI(port = 9001, props = {}) {
  configure(() => {
    require('./stories');
  }, module);

  const params = {
    onDeviceUI: true,
    port,
    ...props,
  };

  return getStorybookUI(params);
}
