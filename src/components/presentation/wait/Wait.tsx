import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, TextProps } from 'react-native-elements';
import { isObject, isString } from '../../../utils';
import { common } from '../../styles';
import { CenterView } from '../layout';

export namespace Wait {
  export interface Props {
    isWaiting?: boolean | (() => boolean);
    init?: () => Promise<void>;
    header?: any;
    activityIndicator?: any;
  }

  export interface ActivityIndicatorComponentProps {
    color?: string;
    size?: number | 'small' | 'large';
  }

  export interface ComponentProps
    extends Props,
      ActivityIndicatorComponentProps {}
}

export class Wait extends React.Component<Wait.ComponentProps> {
  static defaultProps: Partial<Wait.ComponentProps> = {
    size: 'large',
  };

  async componentDidMount() {
    if (this.props.init) {
      await this.props.init();
    }
  }

  render() {
    if (this.isWaiting()) {
      return (
        <CenterView>
          {this.renderHeader()}
          {this.renderActivityIndicator()}
        </CenterView>
      );
    }

    return this.props.children || false;
  }

  protected isWaiting() {
    if (this.props.isWaiting === true) {
      return true;
    }

    if (this.props.isWaiting === false) {
      return false;
    }

    if (this.props.isWaiting instanceof Function) {
      return this.props.isWaiting();
    }

    return true;
  }

  protected renderHeader() {
    const props: Partial<TextProps> = {
      h3: true,
      style: common.centeredContent,
    };

    if (isString(this.props.header)) {
      return <Text {...props}>{this.props.header}</Text>;
    }

    if (React.isValidElement(this.props.header)) {
      return this.props.header;
    }

    if (isObject(this.props.header)) {
      return <Text {...props} {...this.props.header} />;
    }

    return false;
  }

  protected renderActivityIndicator() {
    if (this.props.activityIndicator) {
      return this.props.activityIndicator instanceof Function
        ? this.props.activityIndicator(this.props)
        : this.props.activityIndicator;
    }

    const { color, size } = this.props;

    return <ActivityIndicator color={color} size={size} />;
  }
}
