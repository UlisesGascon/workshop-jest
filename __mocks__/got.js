const data = require('../__tests__/fixtures/fireballs.json')

module.exports = () => Promise.resolve({ body: JSON.stringify(data) })
