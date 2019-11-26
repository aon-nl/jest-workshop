export default class WeatherService {
  constructor() {
  }

  getForecast(daysAhead) {
    return {
      minTemperature: -10,
      maxTemperature: ~~(Math.random() * 10),
      windSpeed: 11
    }
  }
}
