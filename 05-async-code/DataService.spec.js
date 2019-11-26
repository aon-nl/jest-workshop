import { getData, getDataWithDelay } from './DataService'

describe('DataService', () => {
  it('should retrieve data for a given url', () => {
    const data = getData('/my/url')

    expect(data.resolved).toBeTruthy()
  })

  it('should retrieve data from a given url after a given minimum delay', () => {
    const data = getData('/my/url', 1000)

    expect(data.resolved).toBeTruthy()
  })
})
