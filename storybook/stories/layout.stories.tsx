import {
  boolean,
  color,
  number,
  selectV2,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {
  CenterView,
  UniversalView,
} from '../../src/components/presentation/layout';
import { Platform, StatusBar } from 'react-native';

storiesOf('layout', module)
  .addDecorator(withKnobs)
  .add('CenterView', () => {
    const knobs = {
      stretch: boolean('Stretch', false),
      margin: number('Margin', 0),
      background: color('Background', 'transparent'),
      border: selectV2(
        'Border Style',
        {
          None: 'false',
          Default: 'true',
          Solid: 'solid',
          Dotted: 'dotted',
          Dashed: 'dashed',
        },
        'false',
      ),
    };

    const border: CenterView.BorderStyle =
      knobs.border === 'false'
        ? false
        : knobs.border === 'true'
          ? true
          : knobs.border;

    return (
      <CenterView
        stretch={knobs.stretch}
        margin={knobs.margin}
        background={knobs.background}
        border={border}
      />
    );
  })
  .add('UniversalView', () => {
    const view = <UniversalView style={{ borderWidth: 5 }} />;

    if (Platform.OS === 'android') {
      const knobs = {
        hidden: boolean('Hide Status Bar', false),
      };

      return (
        <>
          <StatusBar animated hidden={knobs.hidden} />
          {view}
        </>
      );
    }

    return view;
  });
