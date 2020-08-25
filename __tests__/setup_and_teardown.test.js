// See: https://jestjs.io/docs/en/setup-teardown

const {
  initializeCityDatabase,
  initializeFoodDatabase,
  clearCityDatabase,
  clearFoodDatabase,
  isCity,
  isValidCityFoodPair
} = require('../lib/cities_and_foods')

describe('Setup and Teardown', () => {
  // Applies to all tests in this file
  beforeAll(() => {
    return initializeCityDatabase()
  })

  afterAll(() => {
    return clearCityDatabase()
  })
  describe('matching cities', () => {
    test('city database has Vienna', () => {
      expect(isCity('Vienna')).toBe(true)
    })

    test('city database hasn\'t San Juan', () => {
      expect(isCity('San Juan')).toBe(false)
    })
  })

  describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
      return initializeFoodDatabase()
    })
    afterEach(() => {
      return clearFoodDatabase()
    })

    test('Vienna <3 *strudel', () => {
      expect(isValidCityFoodPair('Vienna', 'Apfelstrudel')).toBe(true)
    })

    test('San Juan doesn\'t pair with English Breakfast', () => {
      expect(isValidCityFoodPair('San Juan', 'English Breakfast')).toBe(false)
    })
  })
})
