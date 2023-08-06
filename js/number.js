/*! js/number.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if a number is between two values, bounds included.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {boolean} true if the number is between the specified values, otherwise false.
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
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {boolean} true if the number is between the specified values, otherwise false.
 */
Number.prototype.isBetweenExclusive || Object.defineProperties(Number.prototype, {
	isBetweenExclusive: {
		value: function (min, max) { // preserves `this`
			return this > min
				&& this < max;
		}
	}
});
