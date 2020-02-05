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
import WeatherDetailsScreen from './WeatherDetailsScreen';

const WeatherStack = createStackNavigator(
  {
    List: {
      screen: WeatherListController,
    },
    Details: {
      screen: WeatherDetailsScreen,
    },
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
    }
  }
);

const RootStack = createStackNavigator(
  {
    WeatherList: {
      screen: WeatherStack,
    },
    AddWeather: {
      screen: AddWeatherScreen,
    },
  },
  {
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