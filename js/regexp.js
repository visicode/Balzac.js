/*! js/regexp.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Adds predefined input RegExp patterns to new RegExp.PATTERN object.
 */
RegExp.PATTERN || Object.defineProperties(RegExp, {
	PATTERN: {
		value: Object.freeze({
			// email address format following official specification
			EMAIL: /[A-Za-z0-9]+([._%+\-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,9}/,
			// 1 or more email addresses, separated by commas
			EMAILS: /[A-Za-z0-9]+([._%+\-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,9}(, ?[A-Za-z0-9]+([._%+\-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,9})*/,
			// phone number in international or local format, with optional extension
			PHONE: /(\+[1-9][0-9]{0,2} ?)?(\([0-9]{1,4}\) ?)?[0-9]+([ .\-]?[0-9]+){6,}( ?#[0-9]{1,5})?/,
			// 8 characters minimum password with at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character
			PASSWORD: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{8,}/,
			// passport number in international format
			PASSPORT: /[Pp][A-Za-z<]{43}[A-Za-z0-9<]{9}[0-9][A-Za-z<]{3}[0-9]{7}[A-Za-z<][0-9]{7}[A-Za-z<]{14}[0-9<][0-9]/,
			// IBAN number from 16 to 39 characters, optionally grouped in blocks of 4
			IBAN: /[A-Za-z]{2}[0-9]{2}( ?[A-Za-z0-9]{4}){3,8}( ?[A-Za-z0-9]{1,3})?/,
			// multi-countries postal code format
			POSTCODE: /([0-9]{2,5}([ \-]?[A-Za-z0-9]{1,6})?|[A-Za-z]{1,3}[0-9 ]( ?[A-Za-z0-9]){1,6})/
		})
	}
});
