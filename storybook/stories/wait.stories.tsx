import { action } from '@storybook/addon-actions';
import {
  boolean,
  color,
  selectV2,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native-elements';
import { CenterView, Wait } from '../../src/components/presentation';

storiesOf('wait', module)
  .addDecorator(withKnobs)
  .add('Static Wait', () => {
    return <Wait />;
  })
  .add('Dynamic Wait', () => {
    const knobs = {
      isWaiting: boolean('Is Waiting', true),
      header: text('Header', 'Waiting...'),
      color: color('Color', '#f00'),
      size: selectV2('Size', { Small: 'small', Large: 'large' }, 'large'),
      custom: boolean('Use Custom Activity Indicator', false),
    };

    const onInit = async () => {
      action('init');
    };

    const custom = <Text>Custom Activity Indicator...</Text>;

    return (
      <Wait
        isWaiting={knobs.isWaiting}
        init={onInit}
        header={knobs.header}
        color={knobs.color}
        size={knobs.size}
        activityIndicator={knobs.custom && custom}
      >
        <CenterView>
          <Text h2>Content Has Loaded</Text>
        </CenterView>
      </Wait>
    );
  });
