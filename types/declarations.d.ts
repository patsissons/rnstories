// see: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25094
import { SelectValue } from '@storybook/addon-knobs/react';
declare module '@storybook/addon-knobs/react' {
  export function selectV2<T extends string>(name: string, options: { [s: string]: string }, value: T, groupId?: string): T;
  export function selectV2<T extends number>(name: string, options: { [s: number]: string }, value: T, groupId?: string): T;
  export function selectV2<T extends SelectValue>(name: string, options: T[], value: T, groupId?: string): T;
}

import React from 'react';
declare module '@storybook/react-native' {
  export interface Params {
    resetStorybook: boolean;
    onDeviceUI: boolean;
    disableWebsockets: boolean;
    host: string;
    port: number;
    query: string;
    secured: boolean;
  }

  export type OnDeviceUI = React.ComponentClass;
  export type StoryView = React.ComponentClass;

  export function getStorybookUI(params?: Partial<Params>): OnDeviceUI | StoryView;
}
