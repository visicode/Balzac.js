/*! js/number.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if a number is between two values, bounds included.
 * @param min The minimum value.
 * @param max The maximum value.
 */
Number.prototype.between || Object.defineProperties(Number.prototype, {
	between: {
		value: function (min, max) { // preserves `this`
			return this >= min && this <= max;
		}
	}
});

/**
 * Checks if a number is between two values, bounds excluded.
 * @param min The minimum value.
 * @param max The maximum value.
 */
Number.prototype.betweenExclusive || Object.defineProperties(Number.prototype, {
	betweenExclusive: {
		value: function (min, max) { // preserves `this`
			return this > min && this < max;
		}
	}
});

/**
 * Returns the string representation of a number in hexadecimal base.
 */
Number.prototype.toHex || Object.defineProperties(Number.prototype, {
	toHex: {
		value: function () { // preserves `this`
			return '0x' + this.toString(16);
		}
	}
});
