import React, { Component } from 'react';
import {
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { openWeatherApiKey } from './apikeys';
import WeatherData from './WeatherData';
import WeatherCard from './WeatherCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loading: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default class WeatherListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFethcing: true,
      cities: ['Mumbai', 'Amsterdam', 'Hong Kong', 'San Francisco'],
      weatherData: [],
    };
  }

  fetchWeatherForCity(city) {
    console.log('Calling ' + 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + openWeatherApiKey);
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + openWeatherApiKey)
           .then((response) => response.json())
           .then((responseJson) => {
             if (responseJson.cod === '404') {
               this.setState({ isFethcing: false });
               Alert.alert(responseJson.message);
             }
             this.setState({
               isFethcing: false,
               weatherData: this.state.weatherData.concat(responseJson),
             });
           })
           .catch((error) => {
             console.log(error);
             Alert.alert('Error finding weather for', city);
           });
  }

  componentDidMount() {
    this.state.cities.forEach((city) => {
      this.fetchWeatherForCity(city);
    });
  }

  render() {
    if (this.state.isFethcing) {
      return (
        <SafeAreaView style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </SafeAreaView>
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <FlatList 
            data={this.state.weatherData}
            renderItem={({ item }) => <WeatherCard weatherData={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}