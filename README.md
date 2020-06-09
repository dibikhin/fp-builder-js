# The Builder pattern in functional style on JavaScript

An example implementation of the GoF Builder pattern using Funcional Programming. Immutability achieved by sequential evolving of frozen objects.

## Prerequisites
- Node.js
- NPM
- Basic knowledge of Functional Programming and Ramda library

## Installing

### Cloning

```bash
$ git clone https://github.com/dibikhin/fp-builder-js.git
```

### Setting up

```bash
$ cd fp-builder-js
$ npm install
```

## Running the tests

```bash
$ npm test
```

## Usage

Build a complex `message` object by filling fields in independent steps - `withTitle()`, `withBody()`, etc. Can call building functions in any order.

`pipe()` simplifies passing parameters without temporary variables. `build()` in the end is for consistency and helps with identifying the Builder pattern.

See the full example in `./builder.spec.js`.

```javascript
  const message = pipe(
    withTitle({ title: 'test title' }),
    withBody({ body: 'test body' }),
    withPriority({ priority: 'high' }),
    build,
  )(emptyMessage)

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
- Roman Dibikhin

## Acknowledgments
Thanks to:
- The "Gang of Four" for the "Design Patterns" book
- Peter Norvig and Scott Wlaschin for inspiration

## Links
- [The Builder Pattern in JavaScript](https://medium.com/better-programming/the-builder-pattern-in-javascript-6f3d85c3ae4a) - An article about someone's OOP version
- [Ramda](https://ramdajs.com) - A practical functional library for JavaScript programmers
- [Mocha](https://mochajs.org) - A feature-rich JavaScript test framework 
- [Chai](https://www.chaijs.com) - A BDD / TDD assertion library
- [Source Making](https://sourcemaking.com) - A free catalog of Design Patterns, AntiPatterns, and Refactorings
- [F# for fun and profit](https://fsharpforfunandprofit.com) - An inspiring and addictive blog about Functional Programming

## License
[MIT](LICENSE)
