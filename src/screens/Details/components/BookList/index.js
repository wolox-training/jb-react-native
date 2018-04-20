import React, { Component } from 'react';
import { View, FlatList, Text} from 'react-native';
import styles from './styles.js';

class BookList extends Component {
  renderItem = ( item ) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>
    )
  }
  
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        
      />
    );
  }
}

export default BookList;  
