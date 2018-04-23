import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styles from './styles.js';

class ImageBook extends Component {
  render() {

    if (!!this.props.image_url) {
      return <Image source={{ uri: this.props.image_url}} style={styles.image_book} />;
    }
    
    return(
      <View style={styles.no_image_book} />
    ) 
  }
}

export default ImageBook;
