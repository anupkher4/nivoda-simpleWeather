import React, { Component } from 'react';
import {
  Alert,
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
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
      weatherData: [],
    };
  }

  fetchWeatherForCity(city) {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + openWeatherApiKey)
           .then((response) => response.json())
           .then((responseJson) => {
             if (responseJson.cod == '404') {
               this.setState({ isFethcing: false });
               Alert.alert('Error finding weather for', city);
             } else {
               this.setState({
                 isFethcing: false,
                 weatherData: this.state.weatherData.concat(responseJson),
               });
             }
           })
           .catch((error) => {
             console.log(error);
           });
  }

  componentDidMount() {
    this.props.cities.forEach((city) => {
      this.fetchWeatherForCity(city);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.cities !== prevProps.cities) {
      this.props.cities
                .filter(city => !prevProps.cities.includes(city))
                .forEach(city => this.fetchWeatherForCity(city));
    }
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
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', { weather: item })}>
                <WeatherCard weatherData={item} />
              </TouchableOpacity>
            }
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}