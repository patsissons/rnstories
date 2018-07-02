import { KeepAwake, registerRootComponent } from 'expo';

if (__DEV__) {
  KeepAwake.activate();
}

import { Storybook } from '../storybook';
import { App } from './App';
import { env } from './utils/env';

registerRootComponent(env.STORYBOOK ? Storybook : App);
