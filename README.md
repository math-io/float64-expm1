expm1
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes `exp(x) - 1`.

## Installation

``` bash
$ npm install math-expm1
```


## Usage

``` javascript
var expm1 = require( 'math-expm1' );
```

#### expm1( x )

Computes `exp(x) - 1`, where `exp(x)` is the natural [exponential function][exponential-function].

``` javascript
var val = expm1( 0.2 );
// returns ~0.221

val = expm1( -9 );
// returns ~-0.999

val = expm1( 0 );
// returns 0

val = expm1( NaN );
// returns NaN
```


## Examples

``` javascript
var expm1 = require( 'math-expm1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*10 - 5;
	console.log( 'e^%d - 1 = %d', x, expm1( x ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-expm1.svg
[npm-url]: https://npmjs.org/package/math-expm1

[build-image]: http://img.shields.io/travis/math-io/expm1/master.svg
[build-url]: https://travis-ci.org/math-io/expm1

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/expm1/master.svg
[coverage-url]: https://codecov.io/github/math-io/expm1?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/expm1.svg
[dependencies-url]: https://david-dm.org/math-io/expm1

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/expm1.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/expm1

[github-issues-image]: http://img.shields.io/github/issues/math-io/expm1.svg
[github-issues-url]: https://github.com/math-io/expm1/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function
