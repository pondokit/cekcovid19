import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'Exo-Regular': require('../assets/fonts/Exo-Regular.ttf'),
  'Exo-Italic': require('../assets/fonts/Exo-Italic.ttf'),
  'Exo-Bold': require('../assets/fonts/Exo-Bold.ttf'),
};

export default class Tx extends React.Component {
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

    if (fn) return 'Exo-Regular'
    else if (fi) return 'Exo-Italic'
    else if (fb) return 'Exo-Bold';
  }

  /**
   * @return {string}
   *
   * cb   color: black
   * cw   color: white
   * cp   color: primary
   */
  color() {
    const {cb, cw, cp} = this.props;

    if (cb) return '#333333'
    else if (cw) return '#FFFFFF'
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
              lineHeight: 23,
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