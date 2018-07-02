import React from 'react';
import { SafeAreaView, StatusBar, ViewProps, Platform } from 'react-native';

export class UniversalView extends React.Component<ViewProps> {
  render() {
    return (
      <SafeAreaView {...this.getProps()}>{this.props.children}</SafeAreaView>
    );
  }

  protected getProps(): ViewProps {
    const { children, style, ...rest } = this.props;

    const marginStyle = Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    });

    return {
      style: [marginStyle, style],
      ...rest,
    };
  }
}
