import WeatherService from "./services/WeatherService"

const dateFormatter = new Intl.DateTimeFormat()
export default class WeatherApp {
  constructor() {
    this.weatherService = new WeatherService()
  }

  get weather() {
    const now = new Date()
    const today = dateFormatter.format(now)
    return {
      date: today,
      ...this.weatherService.getForecast(0)
    }
  }
}
