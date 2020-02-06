import { toCelcius, toFahrenheit, timeIn12HourFormat } from './Utilities';

test('converts 300 Kelvin to 26.85 degree Celcius', () => {
  expect(toCelcius(300)).toEqual(27);
});

test('converts 300 Kelvin to 80.33 degree Fahrenheit', () => {
  expect(toFahrenheit(300)).toEqual(80);
});