import {
  boolean,
  selectV2,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Profile, User } from '../../src/components/presentation/user';

storiesOf('user', module)
  .addDecorator(withKnobs)
  .add('Profile', () => {
    const knobs = {
      name: text('User Name', 'Testy McTestFace'),
      company: text('Company', 'Testron Inc.'),
      description: text('Description', "Let's do that testing!"),
      image: boolean('Render Image', false),
      rounded: boolean('Rounded Avatar', false),
      compact: boolean('Compact Mode', false),
      avatarOnly: boolean('Image Only Mode', false),
      customIcon: boolean('Use Custom Icon', false),
      avatarSize: selectV2(
        'Avatar Size',
        {
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
          'Extra Large': 'xlarge',
        },
        'xlarge',
      ),
    };

    const user: User = {
      name: knobs.name,
      company: knobs.company,
      description: knobs.description,
      image: knobs.image ? undefined : undefined,
    };

    return (
      <Profile
        user={user}
        rounded={knobs.rounded}
        compact={knobs.compact}
        avatarOnly={knobs.avatarOnly}
        avatarSize={knobs.avatarSize}
      />
    );
  });
