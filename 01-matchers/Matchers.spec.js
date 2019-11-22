import * as Matchers from './Matchers'

describe('Matchers', () => {
  it('should add two numbers', () => {
    const actual = Matchers.addToNumbers(1, 2)
    const expected = 3

    fail('todo: add a test which matches checks if the actual equals the expected value')
  })

  it('should return a "-1" when the first argument is smaller then the second', () => {
    const a = 1
    const b = 2
    const actual = Matchers.sortIntegerPredicate(a, b)
    const expected = -1

    fail('todo: add a test which checks if the actual equals the expected value')
  })

  it('should return "0" when the arguments are equal', () => {
    const a = 2
    const b = 2
    const actual = Matchers.sortIntegerPredicate(a,b)
    const expected = 0

    fail('todo: add a test which checks if the actual equals the expected value')
  })

  it('should return "1" if the first argument is bigger then the second argument', () => {
    const a = 1
    const b = 2
    const actual = Matchers.sortIntegerPredicate(a, b)
    const expected = -1

    fail('todo: add a test which checks if the actual equals the expected value')
  })

  it('should be able to sort an array of numbers', () => {
    const input = [5, 2, 3, 4, 1]
    const actual = input.sort(Matchers.sortIntegerPredicate)
    const expected = [1, 2, 3, 4, 5]

    // fix this test using the appropriate matcher
    expect(actual).toBe(expected)
  })

  it('should pass the test with the given constant', () => {
      const given =  undefined // TODO: change undefined to a value that passes all tests
      expect(given).toBeDefined()
      expect(given).not.toBeUndefined()
      expect(given).not.toBeTruthy()
      expect(given).toBeFalsy()
      expect(given).not.toBe(false)
  })

  // it is an alias of test, RSpec style descriptions use IT, xUnit style tests use test
  test('if this shopping list contains the most important item', () => {
    expect(Matchers.shoppingList).toContain('beer')
  })

  it('is not possible to call the myFunction', () => {
    const myFunction = () => {
      return 'is there beer yet?'
    }

    // jest calls this function automatically
    expect(myFunction).toThrowError('oh-noos')
  })

  it('should have some proper expectation about maths', () => {
    const a = 11.1
    const b = 0.2
    const expected = 11.3
    expect(a + b).toBe(expected) //Todo add proper matcher
  })
})
