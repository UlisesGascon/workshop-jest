const got = require('got')
const signature = require('./signature_generator')

const downloadDataFromNasa = async () => got('https://ssd-api.jpl.nasa.gov/fireball.api').then(({ body }) => JSON.parse(body))

const transformData = ({ fields, data }) => data.map(row => {
  const fireball = {}
  fields.map((field, pos) => {
    fireball[field] = row[pos]
  })
  return fireball
})

const getFireballs = async () => {
  const rawData = await downloadDataFromNasa()
  const data = transformData(rawData)

  return {
    data,
    signature: signature(data)
  }
}

module.exports = {
  getFireballs
}
