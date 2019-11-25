import * as Alarm from './Alarm'

describe('Timers', () => {
  describe('single timeout', () => {
    it('should call my function after the given timeout', () => {
      const myCallback = jest.fn()
      Alarm.setAlarm(myCallback, 1000 )

      // add code to run timeouts
      expect(myCallback).toHaveBeenCalled()
    })
  })

  describe('multiple timeouts', () => {
    it('should call the first callback after 1 second', () => {
      const firstCallback = jest.fn()
      const secondCallback = jest.fn()
      Alarm.setAlarm(firstCallback, 1000)
      Alarm.setAlarm(secondCallback, 5000)

      // add code to run timeouts
      expect(firstCallback).toHaveBeenCalled()
      expect(secondCallback).not.toHaveBeenCalled()
    })
  })
})
