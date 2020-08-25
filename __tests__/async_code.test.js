// see: https://jestjs.io/docs/en/asynchronous
describe('Testing Asynchronous Code', () => {
// see: https://jestjs.io/docs/en/asynchronous#callbacks
  describe('callbacks', () => {
    const fetchData = (cb) => setTimeout(() => cb(null, 'peanut butter'), 200)
    test('the data is peanut butter', done => {
      function callback (err, data) {
        try {
          expect(err).toBe(null)
          expect(data).toBe('peanut butter')
          done()
        } catch (error) {
          done(error)
        }
      }

      fetchData(callback)
    })
  })

  // see: https://jestjs.io/docs/en/asynchronous#promises
  describe('Promises', () => {
    const fetchData = () => new Promise(resolve => {
      setTimeout(() => resolve('peanut butter'), 200)
    })

    const fetchDataFail = () => new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Spectacular error!')), 200)
    })
    test('the data is peanut butter', () => {
      return fetchData().then(data => {
        expect(data).toBe('peanut butter')
      })
    })

    test('the data is peanut butter', () => {
      return expect(fetchData()).resolves.toBe('peanut butter')
    })

    test('the fetch fails with an error', () => {
      expect.assertions(1)
      return fetchDataFail().catch(e => expect(e.message).toMatch('Spectacular error!'))
    })

    test('the fetch fails with an error', () => {
      return expect(fetchDataFail()).rejects.toMatchObject({ message: 'Spectacular error!' })
    })
  })

  // see: https://jestjs.io/docs/en/asynchronous#asyncawait
  describe('Async/Await', () => {
    const fetchData = () => Promise.resolve('peanut butter')
    const fetchDataFail = () => Promise.reject(new Error('Spectacular error!'))

    test('the data is peanut butter', async () => {
      const data = await fetchData()
      expect(data).toBe('peanut butter')
    })

    test('the data is peanut butter', async () => {
      await expect(fetchData()).resolves.toBe('peanut butter')
    })

    test('the fetch fails with an error', async () => {
      expect.assertions(1)
      try {
        await fetchDataFail()
      } catch (e) {
        expect(e.message).toMatch('error')
      }
    })

    test('the fetch fails with an error', async () => {
      await expect(fetchDataFail()).rejects.toThrow('Spectacular error!')
    })
  })
})
