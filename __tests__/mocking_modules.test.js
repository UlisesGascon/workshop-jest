const { getFireballs } = require('../lib/nasa_firewalls')
const { fields } = require('./fixtures/fireballs.json')
const fixtureSignature = require('./fixtures/signature')
const signatureGenerator = require('../lib/signature_generator')

// Mocks
jest.mock('../lib/signature_generator')

// Reset Mocks
beforeEach(jest.clearAllMocks)
afterEach(jest.clearAllMocks)

const validateFireballFields = fireball => {
  fields.forEach(field => {
    expect(fireball).toHaveProperty(field)
  })
}

// see: https://jestjs.io/docs/en/manual-mocks
describe('global modules mocking', () => {
  test('Mocking modules from root __mocks__ folder', async () => {
    const { data } = await getFireballs()
    expect(data).toHaveLength(10)
    data.forEach(validateFireballFields)
    expect(data).toMatchSnapshot()
  })

  test('Mocking modules manually from module __mocks__ folder', async () => {
    const { data, signature } = await getFireballs()
    expect(signature).toEqual(fixtureSignature)
    expect(signatureGenerator).toHaveBeenCalledTimes(1)
    expect(signatureGenerator).toHaveBeenCalledWith(data)
  })
})
