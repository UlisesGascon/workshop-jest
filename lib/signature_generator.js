const crypto = require('crypto')
const { v4: uuid } = require('uuid')

const generateHash = data => crypto.createHash('md5').update(data).digest('hex')

module.exports = (data) => ({
  hash: generateHash(JSON.stringify(data)),
  uuid: uuid(),
  timestamp: new Date().getTime()
})
