let cities = []
let foods = {}

const initializeCityDatabase = () => {
  cities = ['Vienna', 'London', 'Madrid']
}

const initializeFoodDatabase = () => {
  foods = {
    Vienna: ['Apfelstrudel', 'Topfenstrudel'],
    Madrid: ['Patatas bravas', 'Bocadillo de calamares'],
    London: ['English Breakfast', 'Fish & Chips']
  }
}
const clearCityDatabase = () => {
  cities = []
}

const clearFoodDatabase = () => {
  foods = {}
}

const isCity = city => cities.includes(city)
const isValidCityFoodPair = (city, food) => {
  if (!foods[city]) return false
  if (!foods[city].includes(food)) return false
  return true
}

module.exports = {
  initializeCityDatabase,
  initializeFoodDatabase,
  clearCityDatabase,
  clearFoodDatabase,
  isCity,
  isValidCityFoodPair
}
