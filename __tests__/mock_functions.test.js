// see: https://jestjs.io/docs/en/mock-functions

describe('Mock Functions', () => {
  test('Mock Functions, usage of jest.fn', () => {
    const forEach = (lists, cb) => {
      for (let i = 0; i < lists.length; i++) {
        cb(lists[i])
      }
    }

    const mockCallback = jest.fn(x => 42 + x)
    forEach([0, 1], mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2)

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)

    // The return value of the first call to the function was 42 (42 + 0)
    expect(mockCallback.mock.results[0].value).toBe(42)

    // The return value of the secnd call to the function was 43 (42 + 1)
    expect(mockCallback.mock.results[1].value).toBe(43)
  })
})
