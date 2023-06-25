/*! js/math.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Returns a numeric expression rounded to a specified number of fractional digits.
 * @param x The value to be rounded.
 * @param decimals The number of fractional digits.
 */
Math.roundTo || Object.defineProperties(Math, {
	roundTo: {
		value: (x, decimals) =>
			+(Math.round(x + 'e+' + decimals) + 'e-' + decimals)
	}
});
