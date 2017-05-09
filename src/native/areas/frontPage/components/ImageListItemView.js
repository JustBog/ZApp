import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ImageListItemView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoaded: false
    };
  }

/*
  Sets image state loaded when it loads succesfully or fails
*/
imageLoaded = () => {
  this.setState({
    isLoaded: true
  });
}

render() {
const { image } = this.props;
  return (
    <View style={styles.screen}>
    {!this.state.isLoaded
      ? <ActivityIndicator animating={!this.state.isLoaded} size={'large'}/>
      : null}
     <TouchableOpacity onPress={()=>this.props.navigate('Image', {image: image})} style={styles.item}>
       <Image source={{uri: image.url}} style={styles.image} onLoadEnd={this.imageLoaded}/>
       <Text>{image.title}</Text>
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
