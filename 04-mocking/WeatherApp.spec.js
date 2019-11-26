import WeatherApp  from './WeatherApp'

// For this test to succeed we need to mock the following:
// - Global Date (replace global.Date)
// - WeatherService (use  manual mock: https://jestjs.io/docs/en/es6-class-mocks#manual-mock)

// P.S.
// I find it more useful to look in the jest examples then reading the docs. See the
// examples here: https://github.com/facebook/jest/tree/master/examples

// Have fun 8-)

// insert code here if needed

// no code changes below this comment please
describe('WeatherApp', () => {
  it('should be able to display todays weather', () => {
    const weatherApp = new WeatherApp()

    expect(weatherApp.weather.date).toBe('11/26/2019')
    expect(weatherApp.weather.maxTemperature).toBe(4)
    expect(weatherApp.weather.minTemperature).toBe(-3)
  })
})
