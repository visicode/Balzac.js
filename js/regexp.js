/*! js/regexp.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Adds predefined input RegExp patterns to new RegExp.PATTERN object.
 */
RegExp.PATTERN || Object.defineProperties(RegExp, {
	PATTERN: {
		value: Object.freeze({
			EMAIL: /[A-Za-z0-9]+([._%+\-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,9}/, // email address format following official specification
			EMAILS: /[A-Za-z0-9]+([._%+\-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,9}(, ?[A-Za-z0-9]+([._%+\-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.\-][A-Za-z0-9]+)*\.[A-Za-z]{2,9})*/, // 1 or more email addresses, separated by commas
			PHONE: /(\+[1-9][0-9]{0,2} ?)?(\([0-9]{1,4}\) ?)?[0-9]+([ .\-]?[0-9]+){6,}( ?#[0-9]{1,5})?/, // phone number in international or local format, with optional extension
			PASSWORD: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{8,}/, // 8 characters minimum password with at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character
			PASSPORT: /[Pp][A-Za-z<]{43}[A-Za-z0-9<]{9}[0-9][A-Za-z<]{3}[0-9]{7}[A-Za-z<][0-9]{7}[A-Za-z<]{14}[0-9<][0-9]/, // passport number in international format
			IBAN: /[A-Za-z]{2}[0-9]{2}( ?[A-Za-z0-9]{4}){3,8}( ?[A-Za-z0-9]{1,3})?/, // IBAN number from 16 to 39 characters, optionally grouped in blocks of 4
			POSTCODE: /([0-9]{2,5}([ \-]?[A-Za-z0-9]{1,6})?|[A-Za-z]{1,3}[0-9 ]( ?[A-Za-z0-9]){1,6})/ // multi-countries postal code format
		})
	}
});
