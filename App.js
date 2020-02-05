import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import WeatherListController from './WeatherListController';
import AddWeatherScreen from './AddWeatherScreen';

const RootStack = createStackNavigator(
  {
    WeatherList: {
      screen: WeatherListController,
    },
    AddWeather: {
      screen: AddWeatherScreen,
    },
  },
  {
    initialRouteName: 'WeatherList',
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}