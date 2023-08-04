/*! js/input.js | MIT License | github.com/visicode/Balzac.js */
'use strict';
import './regexp.js';
import './navigator.js';
import './document.js';
import './element.js';

function getType(input) {
	return (input.getAttribute('type') || input.type).toLowerCase(); // for reading custom types
}

/**
 * - Improves default "email" validation pattern (cf. RegExp.PATTERN.EMAIL and RegExp.PATTERN.EMAILS).
 * - Improves default "tel" validation pattern (cf. RegExp.PATTERN.PHONE).
 * - Adds default "password" validation pattern (cf. RegExp.PATTERN.PASSWORD).
 * - Adds new "passport" input type (cf. RegExp.PATTERN.PASSPORT).
 * - Adds new "iban" input type (cf. RegExp.PATTERN.IBAN).
 * - Adds new "postcode" input type (cf. RegExp.PATTERN.POSTCODE).
 * - Fixes "submit" and "reset" buttons behavior bug in Firefox (https://bugzilla.mozilla.org/show_bug.cgi?id=654072).
 */
function fixInput(input) {
	switch (getType(input)) {
		case 'email':
			if (!input.pattern) input.pattern = input.multiple
				? RegExp.PATTERN.EMAILS.source
				: RegExp.PATTERN.EMAIL.source;
			if (!input.case) input.case = 'lower';
			break;
		case 'tel':
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.PHONE.source;
			break;
		case 'password':
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.PASSWORD.source;
			break;
		case 'passport':
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.PASSPORT.source;
			if (!input.case) input.case = 'upper';
			break;
		case 'iban':
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.IBAN.source;
			if (!input.case) input.case = 'upper';
			break;
		case 'postcode':
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.POSTCODE.source;
			if (!input.case) input.case = 'upper';
			break;
		case 'submit':
		case 'reset':
			if (navigator.isFirefox) input.autocomplete = 'off'; // fix Firefox bug
			break;
	}
}

HTMLInputElement.PASSWORD_RATING || Object.defineProperties(HTMLInputElement, {
	PASSWORD_RATING: {
		value: Object.freeze({
			EMPTY: 0,	// Empty.
			SHORT: 1,	// Less than 8 characters.
			WEAK: 2,	// One or two of the PASSWORD_RATING.GOOD criteria.
			MEDIUM: 3,	// Three of the PASSWORD_RATING.GOOD criteria.
			GOOD: 4,	// At least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.
			STRONG: 5	// All PASSWORD_RATING.GOOD criteria and greater than or equal to 12 characters.
		})
	}
});

/**
 * Returns the password strength from PASSWORD_RATING.EMPTY to PASSWORD_RATING.STRONG.
 */
HTMLInputElement.prototype.getPasswordRating || Object.defineProperties(HTMLInputElement.prototype, {
	getPasswordRating: {
		value: function () { // preserves `this`
			const password = ['password', 'text'].includes(getType(this)) && this.value,
				score = password
					? password.length >= 8
						? Math.max(/[a-z]/.test(password) // lowercase letter
								+ /[A-Z]/.test(password) // uppercase letter
								+ /\d/.test(password) // decimal digit
								+ /\W/.test(password), // non-word character
							this.constructor.PASSWORD_RATING.WEAK)
						: this.constructor.PASSWORD_RATING.SHORT
					: this.constructor.PASSWORD_RATING.EMPTY;
			return score < this.constructor.PASSWORD_RATING.GOOD || password.length < 12
				? score
				: this.constructor.PASSWORD_RATING.STRONG;
		}
	}
});

/**
 * Returns a static node list containing all HTML output elements associated with the input.
 */
HTMLInputElement.prototype.getOutputs || Object.defineProperties(HTMLInputElement.prototype, {
	getOutputs: {
		value: function () { // preserves `this`
			return document.querySelectorAll(`output[for="${this.name}"]`);
		}
	}
});

export default {
	onInit: () => {
		Array.from(document.body.getElementsByTagName('input')).forEach(fixInput);
	},
	onAddedNode: (node) => {
		node instanceof HTMLInputElement && fixInput(node);
	}
};
