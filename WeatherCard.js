import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { toCelcius, toFahrenheit, getShiftedDateInMilliseconds } from './Utilities';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  day: {
    backgroundColor: 'deepskyblue',
  },
  evening: {
    backgroundColor: '#2B4162',
  },
  stack: {
    marginLeft: 20,
  },
  time: {
    fontSize: 18,
    color: 'white',
  },
  city: {
    fontSize: 32,
    color: 'white',
  },
  temperature: {
    fontSize: 64,
    color: 'white',
    marginRight: 20,
  },
});

class TimeLabel extends Component {
  render() {
    return <Text style={styles.time}>{this.props.time}</Text>;
  }
}

class CityLabel extends Component {
  render() {
    return <Text style={styles.city}>{this.props.city}</Text>;
  }
}

class LabelStack extends Component {
  render() {
    return (
      <View style={styles.stack}>
        <TimeLabel time={this.props.time} />
        <CityLabel city={this.props.city} />
      </View>
    );
  }
}

class TemperatureLabel extends Component {
  render() {
    return <Text style={styles.temperature}>{this.props.temperature.toString() + "º"}</Text>;
  }
}

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shiftedDateInMs = getShiftedDateInMilliseconds(this.props.weatherData.timezone);
    const time = new Date(shiftedDateInMs);
    const timeString = time.toLocaleTimeString();
    const city = this.props.weatherData.name;
    const temperature = toCelcius(this.props.weatherData.main.temp);
    var cardStyles = [styles.card]
    if (time.getHours() >= 18) {
      cardStyles.push(styles.evening);
    } else {
      cardStyles.push(styles.day);
    }

    return (
      <View style={cardStyles}>
        <LabelStack time={timeString} city={city} />
        <TemperatureLabel temperature={temperature} />
      </View>
    );
  }
}