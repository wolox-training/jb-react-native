import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BookList from './components/BookList';
import books from '../../books';
import BookDetail from './components/BookDetail';
import { StackNavigator } from 'react-navigation';


class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BookList data={books}/>
      </View>
    );
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: Details},
  BookDetail: { screen: BookDetail },
  }, {
  navigationOptions: {
    headerMode: 'null',
  },
  navigationOptions: ({navigation}) => ({ header: false }),
});

export default NavigationApp;
