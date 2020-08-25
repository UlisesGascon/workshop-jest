# workshop-jest
Jest Workshop

## Content

### Installation and scripts

Installation

```
npm i -D jest
```

Npm Scripts

```
"test": "jest  --verbose ./**/*.test.js",
"test:coverage": "jest --verbose ./**/*.test.js --coverage",
"test:watch": "jest --verbose ./**/*.test.js --watchAll",
```


### Using Matchers

- [Documentation](https://jestjs.io/docs/en/using-matchers)
- [Samples](__test__/matchers.test.js)

### Testing Asynchronous Code

- [Documentation](https://jestjs.io/docs/en/asynchronous)
- [Samples](__test__/async_code.test.js)

### Setup and Teardown

- [Documentation](https://jestjs.io/docs/en/setup-teardown)
- [Samples](__test__/setup_and_teardown.test.js)

### Snapshot Testing

- [Documentation](https://jestjs.io/docs/en/snapshot-testing)
- [Samples](__test__/snapshots.test.js)

### Mock Functions

- [Documentation](https://jestjs.io/docs/en/mock-functions)
- [Samples](__test__/mock_functions.test.js)

### Mocking Modules

- [Documentation (partial)](https://jestjs.io/docs/en/manual-mocks)
- [Samples](__test__/mocking_modules.test.js)
