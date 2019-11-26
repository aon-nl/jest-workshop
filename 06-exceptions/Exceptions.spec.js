 import { throwsWhen } from './ExceptionalModule'

 describe('ExceptionalModule', () => {
   it('should throw an exception when isTrue is true', () => {
     expect(throwsWhen(true))
   })

   it('should not throw an expection when isTrue is false', () => {
     expect(throwsWhen(false)).toHaveReturned()
   })
 })
