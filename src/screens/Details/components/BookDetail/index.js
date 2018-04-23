import React, { Component } from 'react';
import { View,Text, Image } from 'react-native';
import books from '../../../../books';
import styles from './style';
import ImageBook from '../ImageBook';

class BookDetail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const bookSelected =  books.find (book => book.id === parseInt(params.id, 10));
   
    return (
      <View style={styles.container}>
          <ImageBook image_url={bookSelected.image_url}/>
          <Text>{bookSelected.title}</Text>
          <Text>{bookSelected.author}</Text>
          <Text>{bookSelected.genre}</Text>
          <Text>{bookSelected.publisher}</Text>
          <Text>{bookSelected.year}</Text>
      </View>
    );
  }
}

export default BookDetail;
