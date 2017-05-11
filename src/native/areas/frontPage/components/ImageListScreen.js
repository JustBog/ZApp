import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements'
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
 }

/*
  Before mounting start loading images
*/
componentWillMount() {
  this.props.loadImages();
}

renderItem = (item) => {
  return (<View style={styles.item}>
            <ImageListItemView image={item} navigate={this.props.navigation.navigate}/>
          </View>);
}

handleLoadMore = () => {
  this.props.loadImages();
}

render() {
  return (
    <List style={styles.list}>
      {
        /* Started using FlatList in order to make lazy loading*/
      }
      <FlatList
          data={this.props.images}
          numColumns={2}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={
            //Hack to generate *almost* unique key value
            item => item.id + Math.random(100)}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={4}/>
      { this.props.loading
        ? <View style={styles.spinnerContainer}>
            <ActivityIndicator animating={this.props.loading} color='black' size='large' style={styles.spinner}/>
          </View>
        : null }
    </List>
  );
  }
}

const ImageListScreen = connect(mapStateToProps, {...actions })(ImageListScreenPure);

function mapStateToProps(state) {
  return {
    images: selectors.getImages(state),
    loading: selectors.getLoadingStatus(state)
  }
}
export default ImageListScreen;

const styles = StyleSheet.create({
  item: {
    height: 100,
    margin: 1,
    flex: 1
  },
  list: {
    backgroundColor: '#E9E9EF',
    flex: 1
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    backgroundColor: '#E9E9EF'
  }
});
