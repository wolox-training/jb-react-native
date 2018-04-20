/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import './src/config/ReactotronConfig';
import Footer from './src/components/Footer';
import Title from './src/components/Title';
import Input from './src/components/Input';
import List from './src/components/List';
import { Provider } from 'react-redux';
import store from './src/redux/store';

type Props = {};
export default class App extends Component<Props>{

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ScrollView  stickyHeaderIndices={[0]}> 
            <Title />
            <Input />
            <List />
          </ScrollView>
          <Footer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
});
