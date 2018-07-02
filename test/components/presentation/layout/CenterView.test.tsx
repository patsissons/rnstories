import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import { CenterView } from '../../../../src/components/presentation/layout';

describe('presentation components', () => {
  describe('CenterView', () => {
    it('renders without crashing', () => {
      // Arrange
      const component = <CenterView />;

      // Act
      const result = shallow(component);

      // Assert
      expect(result).toBeTruthy();
    });

    it('renders children content', () => {
      // Arrange
      const content = <Text>test</Text>;
      const component = <CenterView>{content}</CenterView>;

      // Act
      const result = shallow(component);

      // Assert
      expect(result.children().matchesElement(content)).toBe(true);
    });

    it('can stretch the children content', () => {
      // Arrange
      const component = <CenterView stretch />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.getElement().props;
      expect(style).toContainEqual({ alignItems: 'stretch' });
    });

    it('can margin the children content', () => {
      // Arrange
      const component = <CenterView margin={10} />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.getElement().props;
      expect(style).toContainEqual({ margin: 10 });
    });

    it('can change the background color', () => {
      // Arrange
      const component = <CenterView background="#f00" />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.getElement().props;
      expect(style).toContainEqual({ backgroundColor: '#f00' });
    });

    it('can override the container style', () => {
      // Arrange
      const containerStyle = {
        backgroundColor: '#f00',
      };
      const component = <CenterView containerStyle={containerStyle} />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.getElement().props;
      expect(style).toContainEqual({ backgroundColor: '#f00' });
    });

    it('can render a border with default style', () => {
      // Arrange
      const component = <CenterView border />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.children().getElement().props;
      expect(style).toContainEqual({ borderStyle: undefined });
    });

    it('can render a border with custom style', () => {
      // Arrange
      const component = <CenterView border="dotted" />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.children().getElement().props;
      expect(style).toContainEqual({ borderStyle: 'dotted' });
    });

    it('can override the wrapper style', () => {
      // Arrange
      const wrapperStyle = {
        backgroundColor: '#f00',
      };
      const component = <CenterView border wrapperStyle={wrapperStyle} />;

      // Act
      const result = shallow(component);

      // Assert
      const { style } = result.children().getElement().props;
      expect(style).toContainEqual({ backgroundColor: '#f00' });
    });
  });
});
