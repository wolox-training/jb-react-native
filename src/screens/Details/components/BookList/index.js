import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import ImageBook from '../ImageBook';
import { StackNavigator, Navigator, NavigationActions, DrawerNavigator, withNavigation } from 'react-navigation';
//import BookDetail from '../BookDetail'
 
let {navigate} = NavigationActions;

class BookList extends Component {
  static navigationOptions = {
    header: null,
    title: 'BookDetail',
  };
  renderItem = ( item ) => {
   const { navigate } = this.props.navigation;
   return (
      <TouchableOpacity onPress= { ()=> navigate('BookDetail', {id: item.item.id })}>
        <View keyExtractor={item.item.id} style={styles.item} >
          <View> 
            <ImageBook image_url={item.item.image_url}/>
          </View>
          <View>
            <Text>{item.item.title}</Text>
            <Text>{item.item.author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <FlatList style={styles.list}
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={item => String(item.id)}
      />
    );
  }
}

export default withNavigation(BookList);  
