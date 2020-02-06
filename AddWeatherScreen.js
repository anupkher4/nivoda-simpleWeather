import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textInput: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
});

export default class AddWeatherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      cities: ['Mumbai', 'Amsterdam', 'Hong Kong'],
      filteredCities: [],
    };
  }

  filterCities(enteredText) {
    this.setState({
      textValue: enteredText,
    });
  }

  submitCityName(cityName) {
    const { navigation } = this.props;
    if (cityName != "") {
      const addCity = navigation.getParam('addCity');
      addCity(cityName);
    }
    navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name of a city, eg. London"
          placeholderTextColor="white"
          value={this.state.textValue}
          onChangeText={text => this.filterCities(text)}
          returnKeyType="search"
          onSubmitEditing={() => this.submitCityName(this.state.textValue)}
        />
      </SafeAreaView>
    );
  }
}