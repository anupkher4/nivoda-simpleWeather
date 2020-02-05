import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import WeatherListScreen from './WeatherListScreen';
import WeatherDetailsScreen from './WeatherDetailsScreen';

export default class WeatherListController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cities: ['Mumbai'],
		};
		this.addCity = this.addCity.bind(this);
	}

	addCity(cityName) {
		this.setState({
			cities: this.state.cities.concat(cityName),
		});
	}

	render() {
		return (
			<WeatherListScreen
				navigation={this.props.navigation}
				cities={this.state.cities}
				addCity={this.addCity}
				showAddWeather={() => this.props.navigation.navigate('AddWeather', { addCity: this.addCity })}
			/>
		);
	}
}