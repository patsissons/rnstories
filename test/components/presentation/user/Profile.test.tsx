import { shallow } from 'enzyme';
import React from 'react';
import { Profile, User } from '../../../../src/components/presentation/user';

describe('presentation components', () => {
  describe('user Profile', () => {
    const user: User = {
      name: 'Testy McTestFace',
      company: 'Testron Inc.',
      description: "Let's do that testing!",
    };

    it('renders without crashing', () => {
      // Arrange
      const component = <Profile user={user} />;

      // Act
      const result = shallow(component);

      // Assert
      expect(result).toBeTruthy();
    });
  });
});
