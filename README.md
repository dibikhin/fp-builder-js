# The Builder pattern in functional style

An example implementation of the GoF Builder pattern using Funcional Programming. Immutability achieved by sequential evolving frozen objects.

## Prerequisites
- Node.js
- NPM
- Basic knowledge of Functional Programming and Ramda library

## Installing

### Cloning

```bash
> git clone https://github.com/dibikhin/fp-builder-js.git
```

### Setting up

```bash
> cd fp-builder-js
> npm install
```

## Running the tests

```bash
> npm test
```

## Usage

```javascript
  const message = pipe(
    withTitle({ title: 'test title' }),
    withBody({ body: 'test body' }),
    withPriority({ priority: 'high' }),
    withImageUrl({ url: '1.jpg' }),
    withImageResolution({ resolution: '1080p' }),
    build,
  )(emptyMessage)

```

See the full example in `./builder.spec.js`

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
- [The Builder Pattern in JavaScript](https://medium.com/better-programming/the-builder-pattern-in-javascript-6f3d85c3ae4a) - an article about an OOP version
- [Ramda](https://ramdajs.com) - A practical functional library for JavaScript programmers
- [Mocha](https://mochajs.org) - A feature-rich JavaScript test framework 
- [Chai](https://www.chaijs.com) - A BDD / TDD assertion library
- [Source Making](https://sourcemaking.com) - A free catalog of Design Patterns, AntiPatterns, and Refactorings
- [F# for fun and profit](https://fsharpforfunandprofit.com) - an inspiring and easy-to-read blog about Functional Programming

## License
[MIT](LICENSE)
