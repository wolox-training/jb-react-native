import React from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import App from './App';

const Main = ()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Awesome App</Text>
      <App />
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#71D9E2', 
    height: 50,
    color: '#FFF',
    textAlign: 'center'
  },
  container: {
    flex: 1
  }
})


AppRegistry.registerComponent('jbrn', () => Main);

