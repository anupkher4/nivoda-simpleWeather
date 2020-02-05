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

import WeatherData from './WeatherData';
import WeatherListScreen from './WeatherListScreen';


class AddWeatherScreen extends Component {

}

const RootStack = createStackNavigator(
  {
    WeatherList: {
      screen: WeatherListScreen,
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