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
	scrollView: {
		flex: 1,
		marginHorizontal: 40,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	stack: {
		margin: 10,
	},
	title: {
		fontSize: 15,
		color: 'lightgray',
	},
	subtitle: {
		fontSize: 32,
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

class LeftLabelStack extends Component {
	render() {
		return (
			<View style={styles.stack}>
				<Text style={styles.title}>{this.props.leftTitle}</Text>
				<Text style={styles.subtitle}>{this.props.leftSubtitle}</Text>
			</View>
		);
	}
}

class RightLabelStack extends Component {
	render() {
		return (
			<View style={styles.stack}>
				<Text style={styles.title}>{this.props.rightTitle}</Text>
				<Text style={styles.subtitle}>{this.props.rightSubtitle}</Text>
			</View>
		);
	}
}

class DetailRow extends Component {
	render() {
		return (
			<View style={styles.row}>
				<LeftLabelStack leftTitle={this.props.leftTitle} leftSubtitle={this.props.leftSubtitle}/>
				<RightLabelStack rightTitle={this.props.rightTitle} rightSubtitle={this.props.rightSubtitle}/>
			</View>
		);
	}
}

class WeatherDetailsView extends Component {
	render() {
		const weather = this.props.weather;
		const min = toCelcius(weather.main.temp_min) + 'º';
		const max = toCelcius(weather.main.temp_max) + 'º';
		const pressure = weather.main.pressure + 'hPa';
		const humidity = weather.main.humidity + '%';
		const visibility = (weather.visibility/1000) + 'km';
		const windSpeed = weather.wind.speed + 'm/s';
		return (
			<ScrollView style={styles.scrollView}>
				<DetailRow leftTitle={'MIN'} leftSubtitle={min} rightTitle={'MAX'} rightSubtitle={max}/>
				<DetailRow leftTitle={'PRESSURE'} leftSubtitle={pressure} rightTitle={'HUMIDITY'} rightSubtitle={humidity}/>
				<DetailRow leftTitle={'VISIBILITY'} leftSubtitle={visibility} rightTitle={'WIND'} rightSubtitle={windSpeed}/>
			</ScrollView>
		);
	}
}

export default class WeatherDetailsScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const navigation = this.props.navigation;
		const weather = navigation.getParam('weather');
		return (
			<SafeAreaView style={styles.container}>
				<MainWeatherView weather={weather}/>
				<WeatherDetailsView weather={weather}/>
			</SafeAreaView>
		);
	}
}