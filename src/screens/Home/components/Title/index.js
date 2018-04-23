import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles.js';
//@flow

type Props = {};
class Title extends Component<Props> {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.textTitle}>Todo List</Text>
      </View>
    )
  }    
}

export default Title;
