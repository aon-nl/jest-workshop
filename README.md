- boot workshop
	- git clone
	- `npm i`

- using jest, useful command line parameters
	- watching
	- debugging tests
		- node native: node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand <options>
		- vue-cli: node --inspect-brk ./node_modules/.bin/vue-cli-service test:unit
		- attach inspector: chrome://inspect
			- Open dedicated DevTools for Node

- matchers
	see: https://jestjs.io/docs/en/using-matchers
	- toBe v.s. toEqual
	- Truthiness: toBeTruthy, toBeFalsy, Why? 
	- toBeCloseTo v.s. toEqual

- BeforeEach/ AfterEach
    see: https://jestjs.io/docs/en/using-matchers

- Timers
    see: https://jestjs.io/docs/en/timer-mocks
    
- Mocking 	
	- Manual mocks
	- ES6 Mocks
	- Globals
		- DateTime

- handling async code

- catching exceptions

- exception handling in async code
