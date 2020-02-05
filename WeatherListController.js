import React, { Component } from 'react';
import { view } from 'react-native';

import WeatherListScreen from './WeatherListScreen';

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
		return <WeatherListScreen
							cities={this.state.cities}
							addCity={this.addCity}
							showAddWeather={() => this.props.navigation.navigate('AddWeather', { addCity: this.addCity })}
						/>
	}
}