import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'InriaSans-Regular': require('../assets/fonts/InriaSans-Regular.ttf'),
  'InriaSans-Italic': require('../assets/fonts/InriaSans-Italic.ttf'),
  'InriaSans-Bold': require('../assets/fonts/InriaSans-Bold.ttf'),
};

export default class Tx extends React.PureComponent {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  /**
   * @return {string}
   *
   * aj   align: justify
   * al   align: left
   * ar   align: right
   * ac   align: center
   */
  align() {
    const {al, ac, ar, aj} = this.props;

    if (aj) return 'justify'
    else if (al) return 'left'
    else if (ar) return 'right'
    else if (ac) return 'center';
  }

  /**
   * @return {string}
   *
   * fn   font: regular
   * fi   font: italic
   * fb   font: bold
   */
  weight() {
    const {fn, fi, fb} = this.props;

    if (fn) return 'InriaSans-Regular'
    else if (fi) return 'InriaSans-Italic'
    else if (fb) return 'InriaSans-Bold';
  }

  /**
   * @return {string}
   *
   * cb   color: black
   * cw   color: white
   * cp   color: primary
   */
  color() {
    const {c, cb, cw, cp, cm} = this.props;

    if (c) return c
    else if (cb) return '#333333'
    else if (cw) return '#FFFFFF'
    else if (cm) return '#888888'
    else if (cp) return '#07BFC2';
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
          <Text 
            style={{ 
              fontFamily: this.weight(), 
              textAlign: this.align(),
              color: this.color(),
              // lineHeight: 23,
              ...this.props.style[0] 
            }}
          >
            {this.props.children}
          </Text>
      );
    } else {
      return <View />;
    }
  }
}