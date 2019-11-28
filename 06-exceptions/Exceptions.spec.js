 import { throwsWhen } from './ExceptionalModule'

 describe('ExceptionalModule', () => {
   it('should throw an exception when isTrue is true', () => {
     // add the appropriate matcher to this expectation
     expect(throwsWhen(true))
   })

   it('should not throw an exception when isTrue is false', () => {
     expect(throwsWhen(false)).toHaveReturned()
   })
 })
