/*! js/regexp.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Adds predefined input RegExp patterns to RegExp.INPUT_PATTERN object.
 */
RegExp.INPUT_PATTERN || Object.defineProperties(RegExp, {
	INPUT_PATTERN: {
		value: Object.freeze({
			EMAIL: /[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,9}/, // official specification
			EMAILS: /[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,9}(, ?[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,9})*/, // comma separated
			PHONE: /(\+[1-9][0-9]{0,2} ?)?(\([0-9]{1,4}\) ?)?[0-9]+([ .-]?[0-9]+){6,}( ?#[0-9]{1,5})?/, // international or local format, optional extension
			PASSWORD: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w]).{8,}/, // minimum 8 characters with at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character
			PASSPORT: /[Pp][A-Za-z<]{43}[A-Za-z0-9<]{9}[0-9][A-Za-z<]{3}[0-9]{7}[A-Za-z<][0-9]{7}[A-Za-z<]{14}[0-9<][0-9]/ // international format
		})
	}
});
