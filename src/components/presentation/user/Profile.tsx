import React from 'react';
import { ImageURISource, StyleProp, View, ViewStyle } from 'react-native';
import { Avatar, Card, Text, AvatarIcon } from 'react-native-elements';
import { User } from './User';
import { common } from '../../styles';

export namespace Profile {
  export interface Props {
    user: User;
    containerStyle?: StyleProp<ViewStyle>;
    rounded?: boolean;
    compact?: boolean;
    avatarOnly?: boolean;
    avatarIcon?: AvatarIcon;
    avatarSize?: IconSize;
    avatarContainerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
  }

  export type IconSize = 'small' | 'medium' | 'large' | 'xlarge' | number;
}

export class Profile extends React.Component<Profile.Props> {
  public static readonly defaults = {
    avatar: {
      size: 'xlarge' as Profile.IconSize,
      icon: {
        name: 'account',
        type: 'material-community',
      } as AvatarIcon,
    },
  };

  render() {
    return (
      <View style={[common.component, this.props.containerStyle]}>
        {this.renderAvatar()}
        {!this.props.avatarOnly && this.renderContent()}
      </View>
    );
  }

  protected renderAvatar() {
    return (
      <Avatar
        source={this.getImageSource()}
        icon={this.getIcon()}
        size={this.props.avatarSize || Profile.defaults.avatar.size}
        rounded={this.props.rounded}
        containerStyle={this.props.avatarContainerStyle}
      />
    );
  }

  protected renderContent() {
    const compactContent = <Text>{this.props.user.name}</Text>;

    if (this.props.compact) {
      return compactContent;
    }

    return (
      <Card
        containerStyle={this.props.contentContainerStyle}
        flexDirection="row"
      >
        {compactContent}
        <Text>{this.props.user.company}</Text>
        <Text>{this.props.user.description}</Text>
      </Card>
    );
  }

  protected getImageSource(): ImageURISource | undefined {
    return this.props.user.image
      ? {
          uri: this.props.user.image,
        }
      : undefined;
  }

  protected getIcon(): AvatarIcon {
    return this.props.avatarIcon || Profile.defaults.avatar.icon;
  }
}
