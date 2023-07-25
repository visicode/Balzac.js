/*! js/number.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if a number is between two values, bounds included.
 * @param min The minimum value.
 * @param max The maximum value.
 */
Number.prototype.isBetween || Object.defineProperties(Number.prototype, {
	isBetween: {
		value: function (min, max) { // preserves `this`
			return this >= min
				&& this <= max;
		}
	}
});

/**
 * Checks if a number is between two values, bounds excluded.
 * @param min The minimum value.
 * @param max The maximum value.
 */
Number.prototype.isBetweenExclusive || Object.defineProperties(Number.prototype, {
	isBetweenExclusive: {
		value: function (min, max) { // preserves `this`
			return this > min
				&& this < max;
		}
	}
});
