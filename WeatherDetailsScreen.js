import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { toCelcius, toFahrenheit } from './Utilities';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	mainWeather: {
		height: '40%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	name: {
		fontSize: 32,
		color: 'white',
		fontWeight: 'bold',
	},
	conditions: {
		fontSize: 26,
		color: 'white'
	},
	temperature: {
		fontSize: 80,
		color: 'white',
	},
});

class MainWeatherView extends Component {
	render() {
		const details = this.props.weather;
		const temperature = toCelcius(details.main.temp) + 'º';
		const conditions = details.weather[0].main;
		return (
			<View style={styles.mainWeather}>
				<Text style={styles.name}>{details.name}</Text>
				<Text style={styles.conditions}>{conditions}</Text>
				<Text style={styles.temperature}>{temperature}</Text>
			</View>
		);
	}
}

export default class WeatherDetailsScreen extends Component {
	render() {
		const navigation = this.props.navigation;
		return (
			<SafeAreaView style={styles.container}>
				<MainWeatherView weather={navigation.getParam('weather')}/>
			</SafeAreaView>
		);
	}
}