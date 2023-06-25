/*! js/date.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if a date is between the specified interval, bounds included.
 * @param start The starting date.
 * @param end The ending date.
 */
Date.prototype.between || Object.defineProperties(Date.prototype, {
	between: {
		value: function (start, end) { // preserves `this`
			return this >= start && this <= end;
		}
	}
});

/**
 * Checks if a date is between the specified interval, bounds excluded.
 * @param start The starting date.
 * @param end The ending date.
 */
Date.prototype.betweenExclusive || Object.defineProperties(Date.prototype, {
	betweenExclusive: {
		value: function (start, end) { // preserves `this`
			return this > start && this < end;
		}
	}
});

/**
 * Returns a new Date that adds the specified number of milliseconds to the value of this instance.
 * @param value A number of milliseconds. The value parameter can be negative or positive.
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
 * Returns a new Date that adds the specified number of seconds to the value of this instance.
 * @param value A number of seconds. The value parameter can be negative or positive.
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
 * Returns a new Date that adds the specified number of minutes to the value of this instance.
 * @param value A number of minutes. The value parameter can be negative or positive.
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
 * Returns a new Date that adds the specified number of hours to the value of this instance.
 * @param value A number of hours. The value parameter can be negative or positive.
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
 * Returns a new Date that adds the specified number of days to the value of this instance.
 * @param value A number of days. The value parameter can be negative or positive.
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
 * Returns a new Date that adds the specified number of months to the value of this instance.
 * @param value A number of months. The value parameter can be negative or positive.
 */
Date.prototype.addMonths || Object.defineProperties(Date.prototype, {
	addMonths: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setMonth(date.getMonth() + +value);
			if (date.getDate() != this.getDate()) date.setDate(0); // last day of the previous month
			return date;
		}
	}
});

/**
 * Returns a new Date that adds the specified number of years to the value of this instance.
 * @param value A number of years. The value parameter can be negative or positive.
 */
Date.prototype.addYears || Object.defineProperties(Date.prototype, {
	addYears: {
		value: function (value) { // preserves `this`
			const date = new Date(this);
			date.setFullYear(date.getFullYear() + +value);
			if (date.getDate() != this.getDate()) date.setDate(0); // last day of the previous month
			return date;
		}
	}
});
