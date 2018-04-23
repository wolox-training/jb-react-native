
import React, { Component } from 'react';
import styles from './styles.js';
import List from './components/List';
import Input from './components/Input/index';
import Footer from './components/Footer';
import Title from './components/Title';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import {
  View,
  ScrollView
} from 'react-native';

class Home extends Component{
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

export default Home;
