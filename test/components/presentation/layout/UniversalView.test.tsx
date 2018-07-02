import { shallow } from 'enzyme';
import React from 'react';
import { SafeAreaView, Text, ViewProps } from 'react-native';
import { UniversalView } from '../../../../src/components/presentation/layout';

describe('presentation components', () => {
  describe('UniversalView', () => {
    it('renders a SafeAreaView', () => {
      // Arrange
      const component = <UniversalView />;

      // Act
      const result = shallow(component);

      // Assert
      expect(result).toBeTruthy();
      expect(result.getElement().type).toBe(SafeAreaView);
    });

    it('passes props onto SafeAreaView', () => {
      // Arrange
      const props: ViewProps = { pointerEvents: 'auto', testID: 'test' };
      const component = <UniversalView {...props} />;

      // Act
      const result = shallow(component);

      // Assert
      const { children, style, ...resultProps } = result.getElement().props;
      expect(resultProps).toEqual(props);
    });

    it('renders a children content', () => {
      // Arrange
      const content = <Text>test</Text>;
      const component = <UniversalView>{content}</UniversalView>;

      // Act
      const result = shallow(component);

      // Assert
      expect(result.children().matchesElement(content)).toBe(true);
    });
  });
});
