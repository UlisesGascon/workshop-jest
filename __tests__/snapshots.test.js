// see: https://jestjs.io/docs/en/snapshot-testing

const data = [{
  name: 'Ulises',
  role: 'Developer'
}, {
  name: 'Peter',
  role: 'Developer'
}]

const dataTransformation = users => users.map(user => `- ${user.name} is ${user.role} in this team.`).join('')

describe('snapshot', () => {
  test('Simple data snapshot', () => {
    const dataTransformed = dataTransformation(data)
    expect(dataTransformed).toMatchSnapshot()
  })
})
