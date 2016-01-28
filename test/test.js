'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var incrspace = require( 'compute-incrspace' );
var expm1 = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/small.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof expm1 === 'function', 'main export is a function' );
	t.end();
});

tape( 'the function agrees with `Math.exp(x) - 1` for most `x`', function test( t ) {
	var delta;
	var tol;
	var expected;
	var x;
	var y;
	var val;
	var i;
	x = incrspace( 0, 50, 0.5 );
	for ( i = 0; i < x.length; i++ ) {
		val = x[ i ];
		y = expm1( val );
		expected = Math.exp( val ) - 1;
		delta = abs( y - expected );
		tol = 1e-12 * Math.max( 1, abs( y ), abs( expected ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + val + '. Value: ' + y + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function correctly calculates exp(x)-1 for very small x', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < small.data.length; i++ ) {
		v = expm1( small.data[ i ] );
		delta = abs( v - small.expected[ i ] );
		tol = 1e-12 * Math.max( 1, abs( v ), abs( small.expected[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + small.data[ i ] + '. Value: ' + v + '. Expected: ' + small.expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function returns `-1` if provided `-infinity`', function test( t ) {
	t.equal( expm1( Number.NEGATIVE_INFINITY ), -1, 'equals -1' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	t.equal( expm1( Number.POSITIVE_INFINITY ), Number.POSITIVE_INFINITY, 'equals +infinity' );
	t.end();
});
