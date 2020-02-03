function toCelcius(temperatureInKelvin) {
	return Math.round(temperatureInKelvin - 273.15);
}

function toFahrenheit(temperatureInKelvin) {
	return Math.round((temperatureInKelvin * (9/5)) - 459.67);
}

export { toCelcius, toFahrenheit };