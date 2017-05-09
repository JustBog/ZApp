import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageScreen extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static navigationOptions = {
     title: 'Image',
   };

render() {
const { image } = this.props.navigation.state.params;

  return (
    <View style={styles.screen}>
      <Text style={styles.header}> {image.title} </Text>
      <Image source={{uri: image.url}} style={styles.image}/>
    </View>
  );
  }
}

export default ImageScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  image: {
    resizeMode: 'cover',
    flex: 1
  },
  header: {
    textAlign: 'center'
  }
});
