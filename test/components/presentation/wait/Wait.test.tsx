import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import { Wait } from '../../../../src/components/presentation/wait';

describe('presentation components', () => {
  describe('Wait', () => {
    it('can render in loading mode', () => {
      // Arrange
      const component = (<Wait isWaiting={ () => true } />);

      // Act
      const result = shallow(component);

      // Assert
      expect(result).toBeTruthy();
    });

    it('renders children content in loaded mode', () => {
      // Arrange
      const content = <Text>test</Text>;
      const component = (
        <Wait isWaiting={ () => false }>
          {content}
        </Wait>
      );

      // Act
      const result = shallow(component);

      // Assert
      expect(result.matchesElement(content)).toBe(true);
    });

    it('can render a custom activity indicator', () => {
      // Arrange
      const content = (<Text>test</Text>);
      const component = (<Wait isWaiting={ () => true } activityIndicator={ content } />);

      // Act
      const result = shallow(component);

      // Assert
      expect(result.contains(content)).toBe(true);
    });

    it('can render a custom header', () => {
      // Arrange
      const content = (<Text>test</Text>);
      const component = (<Wait isWaiting={ () => true } header={ content } />);

      // Act
      const result = shallow(component);

      // Assert
      expect(result.contains(content)).toBe(true);
    });

    it('calls the init function', () => {
      const init = jest.fn();
      const component = (<Wait isWaiting={ () => true } init={ init } />);

      // Act
      shallow(component);

      // Assert
      expect(init).toHaveBeenCalled();
    });
  });
});
