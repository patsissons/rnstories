import React from 'react';
import { FontLoader } from '../src/components/presentation/fonts';
import { createStorybookUI } from './storybook';

const StorybookUI = createStorybookUI();

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
export class Storybook extends React.Component {
  render() {
    return (
      <FontLoader>
        <StorybookUI />
      </FontLoader>
    );
  }
}
