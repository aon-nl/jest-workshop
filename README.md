This repo is full of failing and/or incomplete tests which need to be solved as part of an unit testing workshop.

Workshops contents:
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
    - examples?: see: https://github.com/facebook/jest/tree/master/examples

- matchers
	- read: https://jestjs.io/docs/en/using-matchers
	    - toBe v.s. toEqual
	    - Truthiness: toBeTruthy, toBeFalsy, Why? 
	    - toBeCloseTo v.s. toEqual
	- run `npm run test:matchers -- --watch`
	- fix tests

- BeforeEach / AfterEach
    - read: https://jestjs.io/docs/en/using-matchers
    - run `npm run test:setup -- --watch`
    - fix tests 

- Timers
    - read: https://jestjs.io/docs/en/timer-mocks
    - run `npm run test:timers -- --watch`
    - fix tests

- Mocking
    - read: https://jestjs.io/docs/en/es6-class-mocks#manual-mock
    - mocking the global Date is a pain in the backside
        - See: https://github.com/facebook/jest/issues/2234
    - run `npm run test:mocking -- --watch`
    - mock WeatherService using global mock
    - mock Global Date time
    - fix tests

- handling async code
    - read: https://jestjs.io/docs/en/tutorial-async
    - run `npm run test:async-code -- --watch`
    - fix tests
    
- catching exceptions
    - run `npm run test:exceptions -- --watch`
    - fix tests
