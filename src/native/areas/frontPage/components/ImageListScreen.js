import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { default as ImageListItemView } from './ImageListItemView';

class ImageListScreenPure extends Component {
  constructor(props, context) {
    super(props, context);
  }

static navigationOptions = {
   title: 'Image list',
 };

/*
  Before mounting start loading images
*/
componentWillMount() {
  this.props.loadImages();
}

/* Rendering whole images */
renderImageItems() {
   return this.props.images.map(item => {
     return (
       <View style={styles.item} key={item.id} >
        <ImageListItemView image={item} navigate={this.props.navigation.navigate}/>
      </View>
  );})
}

render() {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
      {this.renderImageItems()}
      </View>
    </ScrollView>
  );
  }
}

const ImageListScreen = connect(mapStateToProps, {...actions })(ImageListScreenPure);

function mapStateToProps(state) {
  return {
    images: selectors.getImages(state)
  }
}
export default ImageListScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: '49%',
    height: 100,
    margin: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  }
});
