import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import WeatherData from './WeatherData';
import WeatherCard from './WeatherCard';

const temperature = WeatherData.main.temp;
const time = WeatherData.timezone;
const city = WeatherData.name;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <WeatherCard temperature={temperature} time={time} city={city} />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}