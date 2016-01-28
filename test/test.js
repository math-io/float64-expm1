'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var pow = require( 'math-power' );
var incrspace = require( 'compute-incrspace' );
var pinf = require( 'const-pinf-float64' );
var ninf = require( 'const-ninf-float64' );
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
	x = incrspace( -10, 50, 0.5 );
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

tape( 'the function accurately computes `exp(x) - 1` for very small `x`', function test( t ) {
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

tape( 'the function returns `+infinity` for very large `x`', function test( t ) {
	t.equal( expm1( 800 ), pinf, 'equals +infinity' );
	t.equal( expm1( 900 ), pinf, 'equals +infinity' );
	t.equal( expm1( 1000 ), pinf, 'equals +infinity' );
	t.end();
});

tape( 'the function returns `-1` for negative, large `x`', function test( t ) {
	t.equal( expm1( -800 ), -1, 'equals -1' );
	t.equal( expm1( -900 ), -1, 'equals -1' );
	t.equal( expm1( -1000 ), -1, 'equals -1' );
	t.end();
});

tape( 'the function returns `x` for `x` smaller than `2**-54`', function test( t ) {
	var val = pow( 2, -80 );
	t.equal( expm1( val ), val, 'equals input value' );
	val = pow( 2, -55 );
	t.equal( expm1( val ), val, 'equals input value' );
	val = pow( 2, -60 );
	t.equal( expm1( val ), val, 'equals input value' );
	t.end();
});

tape( 'the function returns `-1` if provided `-infinity`', function test( t ) {
	t.equal( expm1( ninf ), -1, 'equals -1' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	t.equal( expm1( pinf ), pinf, 'equals +infinity' );
	t.end();
});
