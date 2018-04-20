// @flow

import React, { Component } from 'react';
import { View, FlatList, Text, CheckBox, Button } from 'react-native';
import styles from './styles.js';

type Props = {
  data: Array<number>
};

class List extends Component<Props> {
  state = {
    checked: false
  }

  handleValueChange = (checked) => {
    this.setState({checked: !checked });
  }
  
  keyExtractor(item: number) {
    return item.toString();
  } 
  
  handlePress = (item) => {
    this.props.removeTodo(this.keyExtractor(item.id));
  }

  renderItem = ({ item } : { item: number }) => {
    return (
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <View styles={styles.finalItem}>
          <CheckBox value={this.state.checked} onValueChange={this.handleValueChange} />
          <Button title='X' onPress={() => {this.handlePress(item)}}/>
        </View>
      </View>
    )
  }
  
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default List;  
