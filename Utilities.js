function toCelcius(temperatureInKelvin) {
	return Math.round(temperatureInKelvin - 273.15);
}

function toFahrenheit(temperatureInKelvin) {
	return Math.round((temperatureInKelvin * (9/5)) - 459.67);
}

function getShiftedDateInMilliseconds(offset) {
	const utcTimeInMs = new Date().getTimezoneOffset() * 60 * 1000;
	return Date.now() + utcTimeInMs + (offset * 1000);
}

export { toCelcius, toFahrenheit, getShiftedDateInMilliseconds };