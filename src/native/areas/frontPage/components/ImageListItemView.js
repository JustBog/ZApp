import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';

class ImageListItemView extends Component {
  constructor(props, context) {
    super(props, context);
  }

render() {
  return (
    <View style={styles.screen}>
     <TouchableOpacity onPress={()=>this.props.navigate('ImageScreen', {image: this.props.image})} style={styles.item}>
       <Image source={{uri: this.props.image.url}} style={styles.image}/>
       <Text numberOfLines={1}>{this.props.image.title}</Text>
     </TouchableOpacity>
    </View>
  );
  }
}

export default ImageListItemView;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    resizeMode: 'cover',
    flex: 1
  },
  item: {
    flex: 1
  }
});
