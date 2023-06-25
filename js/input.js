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
 * - Improves default "email" validation pattern (cf. RegExp.INPUT_PATTERN.EMAIL and RegExp.INPUT_PATTERN.EMAILS).
 * - Improves default "tel" validation pattern (cf. RegExp.INPUT_PATTERN.PHONE).
 * - Adds default "password" validation pattern (cf. RegExp.INPUT_PATTERN.PASSWORD).
 * - Adds new "passport" input type (cf. RegExp.INPUT_PATTERN.PASSPORT).
 * - Fixes "submit" and "reset" buttons behavior bug in Firefox (https://bugzilla.mozilla.org/show_bug.cgi?id=654072).
 */
function fixInput(input) {
	switch (getType(input)) {
		case 'email':
			if (!input.pattern) input.pattern = input.multiple
				? RegExp.INPUT_PATTERN.EMAILS.source
				: RegExp.INPUT_PATTERN.EMAIL.source;
			if (!input.case) input.case = 'lower';
			break;
		case 'tel':
			if (!input.pattern) input.pattern =
				RegExp.INPUT_PATTERN.PHONE.source;
			break;
		case 'password':
			if (!input.pattern) input.pattern =
				RegExp.INPUT_PATTERN.PASSWORD.source;
			break;
		case 'passport':
			if (!input.pattern) input.pattern =
				RegExp.INPUT_PATTERN.PASSPORT.source;
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
			EMPTY: 0,	// empty
			SHORT: 1,	// less than 8 characters
			WEAK: 2,	// 1 or 2 of the PASSWORD_RATING.GOOD criteria
			FAIR: 3,	// 3 of the PASSWORD_RATING.GOOD criteria
			GOOD: 4,	// at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character
			STRONG: 5	// all PASSWORD_RATING.GOOD criteria and greater than or equal to 12 characters
		})
	}
});

/**
 * Returns the password strength from PASSWORD_RATING.EMPTY to PASSWORD_RATING.STRONG.
 */
HTMLInputElement.prototype.getPasswordRating || Object.defineProperties(HTMLInputElement.prototype, {
	getPasswordRating: {
		value: function () { // preserves `this`
			const pwd = /^(password|text)$/.test(getType(this)) && this.value,
				score = pwd
					? pwd.length >= 8
						? Math.max(/[a-z]/.test(pwd) + /[A-Z]/.test(pwd) + /\d/.test(pwd) + /[^\w]/.test(pwd),
							this.constructor.PASSWORD_RATING.WEAK)
						: this.constructor.PASSWORD_RATING.SHORT
					: this.constructor.PASSWORD_RATING.EMPTY;
			return score < this.constructor.PASSWORD_RATING.GOOD || pwd.length < 12
				? score
				: this.constructor.PASSWORD_RATING.STRONG;
		}
	}
});

/**
 * Returns an array containing all HTML output elements associated with the input.
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
		Array.from(document.body.getElementsByTagName('input')).forEach(fixInput); // fix inputs already in DOM
	},
	onAddedNode: (node) => {
		node instanceof HTMLInputElement && fixInput(node);
	}
};
