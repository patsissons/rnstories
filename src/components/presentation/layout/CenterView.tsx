import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { common } from '../../styles';

export namespace CenterView {
  export interface Props {
    stretch?: boolean;
    margin?: number;
    background?: string;
    containerStyle?: StyleProp<ViewStyle>;
    border?: BorderStyle;
    wrapperStyle?: StyleProp<ViewStyle>;
  }

  export type BorderStyle = boolean | 'solid' | 'dotted' | 'dashed';
}

export class CenterView extends React.Component<CenterView.Props> {
  render() {
    return <View style={this.getStyle()}>{this.renderContent()}</View>;
  }

  protected renderContent() {
    if (this.props.border) {
      const wrapperBorderStyle = {
        borderStyle: this.props.border === true ? undefined : this.props.border,
      };

      return (
        <View
          style={[style.wrapper, wrapperBorderStyle, this.props.wrapperStyle]}
        >
          {this.props.children}
        </View>
      );
    }

    return this.props.children;
  }

  protected getStyle() {
    const result: Array<StyleProp<ViewStyle>> = [style.container];

    if (this.props.stretch) {
      result.push({ alignItems: 'stretch' });
    }

    if (this.props.margin) {
      result.push({ margin: this.props.margin });
    }

    if (this.props.background) {
      result.push({ backgroundColor: this.props.background });
    }

    if (this.props.containerStyle) {
      result.push(this.props.containerStyle);
    }

    return result;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    borderWidth: 1,
    borderRadius: common.vars.defaultRadius,
    borderColor: common.vars.fgDim,
    overflow: 'hidden',
  },
});
