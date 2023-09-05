/*! js/date.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Adds duration constants to new Date.DURATION object to help converting delays into milliseconds.
 */
Date.DURATION || Object.defineProperties(Date, {
	DURATION: {
		value: Object.freeze({
			SECONDE: 1000,
			MINUTE: 60 * 1000,
			HOUR: 60 * 60 * 1000,
			DAY: 24 * 60 * 60 * 1000
		})
	}
});

/**
 * Checks if a date is valid.
 * @returns {boolean} true if the date is valid, otherwise false.
 */
Date.prototype.isValid || Object.defineProperties(Date.prototype, {
	isValid: {
		value: function () { // preserves `this`
			return this instanceof Date
				&& !Number.isNaN(this);
		}
	}
});

/**
 * Checks if a date is between the specified interval, bounds included.
 * @param {Date} start The starting date.
 * @param {Date} end The ending date.
 * @returns {boolean} true if the date is between start and end included, otherwise false.
 */
Date.prototype.isBetween || Object.defineProperties(Date.prototype, {
	isBetween: {
		value: function (start, end) { // preserves `this`
			return this >= start
				&& this <= end;
		}
	}
});

/**
 * Checks if a date is between the specified interval, bounds excluded.
 * @param {Date} start The starting date.
 * @param {Date} end The ending date.
 * @returns {boolean} true if the date is between start and end excluded, otherwise false.
 */
Date.prototype.isBetweenExclusive || Object.defineProperties(Date.prototype, {
	isBetweenExclusive: {
		value: function (start, end) { // preserves `this`
			return this > start
				&& this < end;
		}
	}
});

/**
 * Returns a new date that adds the specified number of milliseconds to the value of this instance.
 * @param {number} value A number of milliseconds. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addMilliseconds || Object.defineProperties(Date.prototype, {
	addMilliseconds: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setMilliseconds(date.getMilliseconds() + +value);
			return date;
		}
	}
});

/**
 * Returns a new date that adds the specified number of seconds to the value of this instance.
 * @param {number} value A number of seconds. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addSeconds || Object.defineProperties(Date.prototype, {
	addSeconds: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setSeconds(date.getSeconds() + +value);
			return date;
		}
	}
});

/**
 * Returns a new date that adds the specified number of minutes to the value of this instance.
 * @param {number} value A number of minutes. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addMinutes || Object.defineProperties(Date.prototype, {
	addMinutes: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setMinutes(date.getMinutes() + +value);
			return date;
		}
	}
});

/**
 * Returns a new date that adds the specified number of hours to the value of this instance.
 * @param {number} value A number of hours. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addHours || Object.defineProperties(Date.prototype, {
	addHours: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setHours(date.getHours() + +value);
			return date;
		}
	}
});

/**
 * Returns a new date that adds the specified number of days to the value of this instance.
 * @param {number} value A number of days. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addDays || Object.defineProperties(Date.prototype, {
	addDays: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setDate(date.getDate() + +value);
			return date;
		}
	}
});

/**
 * Returns a new date that adds the specified number of months to the value of this instance.
 * @param {number} value A number of months. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addMonths || Object.defineProperties(Date.prototype, {
	addMonths: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setMonth(date.getMonth() + +value);
			if (date.getDate() != this.getDate())
				date.setDate(0); // last day of the previous month
			return date;
		}
	}
});

/**
 * Returns a new date that adds the specified number of years to the value of this instance.
 * @param {number} value A number of years. The value parameter can be negative or positive.
 * @returns {Date} The new date.
 */
Date.prototype.addYears || Object.defineProperties(Date.prototype, {
	addYears: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setFullYear(date.getFullYear() + +value);
			if (date.getDate() != this.getDate())
				date.setDate(0); // last day of the previous month
			return date;
		}
	}
});
