import React, { Component } from 'react';
import { Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';

import WeatherListScreen from './WeatherListScreen';
import WeatherDetailsScreen from './WeatherDetailsScreen';

export default class WeatherListController extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: () => <Text></Text>,
			headerRight: () => (
				<View style={{ paddingRight: 10 }}>
					<Button
						title="+ City"
						color="#fff"
						onPress={() => navigation.navigate('AddWeather', { addCity: navigation.getParam('addCity') })}
					/>
				</View>
			),
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			cities: ['Mumbai'],
		};
		this.addCity = this.addCity.bind(this);
	}

	componentDidMount() {
		this.props.navigation.setParams({ addCity: this.addCity });
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
			/>
		);
	}
}