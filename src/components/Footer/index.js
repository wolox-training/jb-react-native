import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
//@flow

type Props = {};
class Footer extends Component<Props> {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Remove completed items</Text>
      </View>
    )
  }    
}

export default Footer;
