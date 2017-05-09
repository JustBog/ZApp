import React, { Component } from 'react';
import { Text } from 'react-native';
import { ImageScreen, ImageListScreen } from 'zapp-frontpage';
import { StackNavigator } from 'react-navigation';

/*
  Navigator configuration containing screens.
  Decided to use it because of community suggestions
*/

const Navigator = StackNavigator({
  ImageList: { screen: ImageListScreen },
  Image: { screen: ImageScreen }
});

export default App = Navigator;
