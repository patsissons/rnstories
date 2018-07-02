import { Font } from 'expo';
import React from 'react';
import { Wait } from '../wait';
import { appFonts } from './AppFonts';

export namespace FontLoader {
  export interface Props {
    fonts?: Font.FontMap;
    onLoaded?: () => void;
  }

  export interface State {
    isLoaded: boolean;
  }
}

export class FontLoader extends React.Component<
  FontLoader.Props,
  FontLoader.State
> {
  constructor(props: any) {
    super(props);

    this.init = this.init.bind(this);
    this.isWaiting = this.isWaiting.bind(this);
    this.handleOnLoaded = this.handleOnLoaded.bind(this);

    this.state = {
      isLoaded: false,
    };
  }

  render() {
    return (
      <Wait init={this.init} isWaiting={this.isWaiting}>
        {this.props.children}
      </Wait>
    );
  }

  protected async init() {
    await Font.loadAsync(this.props.fonts || appFonts);

    this.setState(() => {
      return {
        isLoaded: true,
      };
    }, this.handleOnLoaded);
  }

  protected isWaiting() {
    return this.state.isLoaded !== true;
  }

  protected handleOnLoaded() {
    if (this.props.onLoaded) {
      this.props.onLoaded();
    }
  }
}
