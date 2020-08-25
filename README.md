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

## Other

### More Topics

- [Jest | Using with puppeteer](https://jestjs.io/docs/en/puppeteer)
- [Jest | Using with MongoDB](https://jestjs.io/docs/en/mongodb)
- [Jest | Using with DynamoDB](https://jestjs.io/docs/en/mongodb)
- [Jest | DOM Manipulation (JQuery)](https://jestjs.io/docs/en/tutorial-jquery)
- [Jest | ES6 Class Mocks](https://jestjs.io/docs/en/es6-class-mocks)
- [Jest | Timer Mocks](https://jestjs.io/docs/en/timer-mocks)
- [Jest | Testing React Apps](https://jestjs.io/docs/en/tutorial-react)

### Resources
- [jest-community/awesome-jest](https://github.com/jest-community/awesome-jest)
- [sapegin/jest-cheat-sheet](https://github.com/sapegin/jest-cheat-sheet)
- [kentcdodds/react-jest-workshop](https://github.com/kentcdodds/react-jest-workshop)

### Videos
- [Jest Architecture by Christoph Nakazawa](https://www.youtube.com/watch?v=3YDiloj8_d0&feature=emb_title)
- [Test React applications using Enzyme & Jest by Ryan Walsh](https://www.youtube.com/watch?v=8Ww2QBVIw0I)
- [Snapshot testing by Anna Doubkova](https://www.youtube.com/watch?v=sCbGfi40IWk)
- [Establishing Testing Patterns with Software Design Principles by Aaron Abramov](https://www.youtube.com/watch?v=_pnW-JjmyXE)
- [Jest Snapshots and Beyond by Rogelio Guzman](https://www.youtube.com/watch?v=HAuXJVI_bUs)

### Tooling

- [keplersj/jest-serializer-xml](https://github.com/keplersj/jest-serializer-xml)
- [satya164/jest-file-snapshot](https://github.com/satya164/jest-file-snapshot)
- [americanexpress/jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)
- [americanexpress/jest-json-schema](https://github.com/americanexpress/jest-json-schema)
- [smooth-code/jest-puppeteer](https://github.com/smooth-code/jest-puppeteer/tree/master/packages/expect-puppeteer)
- [FormidableLabs/enzyme-matchers](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme)