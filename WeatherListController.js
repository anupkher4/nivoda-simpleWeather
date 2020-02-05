import React, { Component } from 'react';
import { view } from 'react-native';

import WeatherListScreen from './WeatherListScreen';

export default class WeatherListController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cities: ['Mumbai', 'Amsterdam', 'Hong Kong'],
		};
		this.addCity = this.addCity.bind(this);
	}

	addCity(cityName) {
		console.log('In addCity');
		this.setState({
			cities: this.state.cities.concat(cityName),
		});
	}

	render() {
		console.log('In controller render ' + this.state.cities.join());
		return <WeatherListScreen cities={this.state.cities} addCity={this.addCity} />
	}
}