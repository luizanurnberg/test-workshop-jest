# How to run:

First of all you will need `node.js` and `yarn` installed.

### Install dependencies

```
yarn
```

### Start express node server:

```
node external-api-server/start
```

### Then you can run:

```
yarn test
```

or use your code editor to debug and run the tests.

### About Jest:

#### Preparing de test context:

```
// roda antes dos testes:
// (ex: limpar o banco antes dos testes)
afterAll(fn, timeout)
afterEach(fn, timeout)

// roda depois dos testes:
// (ex: adicionar dados ao banco antes de um teste)
beforeAll(fn, timeout)
beforeEach(fn, timeout)
```

#### Testing:

```
describe(name, fn)

// or `it`
test(name, fn, timeout)

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

test('did not rain', () => {
    expect(inchesOfRain()).toBe(0);
});
```

#### Expect and To:

```
expect(value)

toBe()
toBeCloseTo()
toEqual()
toStrictEqual()
toHaveProperty()
toThrowError()
```

#### Bibliography

https://jestjs.io/
