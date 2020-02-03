import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 100,
		backgroundColor: 'deepskyblue',
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
		return (
			<View style={styles.card}>
				<LabelStack time={this.props.time} city={this.props.city} />
				<TemperatureLabel temperature={this.props.temperature} />
			</View>
		);
	}
}