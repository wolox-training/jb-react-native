import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BookList from './components/BookList';
import books from '../../books'

class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BookList data={books}/>
      </View>
    );
  }
}

export default Details;
