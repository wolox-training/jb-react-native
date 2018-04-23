// @flow

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles.js';

type Props = { addNewTodo: (text: Any) =>  Any };
type State = { text: String };
class Input extends Component<Props,State> {
  state = {
    text: ''
  }
    
  handleChange = ( text: String ) => {
    this.setState({text: text});
  }

  handleSubmit = () => {
    this.props.addNewTodo(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <View style={styles.input} >
        <TextInput placeholder='Enter an item!' style={styles.textInput} onChangeText={this.handleChange} onSubmitEditing={this.handleSubmit} value={this.state.text} underlineColorAndroid="transparent"/>
      </View>
    )
  }    
}

export default Input;
