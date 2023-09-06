/*! ./js/input.js | MIT License | github.com/visicode/Balzac.js */
'use strict';
import './regexp.js';
import './navigator.js';
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
			input.case = 'lower';
			if (!input.pattern) input.pattern = input.multiple
				? RegExp.PATTERN.EMAILS.source
				: RegExp.PATTERN.EMAIL.source;
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
			input.case = 'upper';
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.PASSPORT.source;
			break;
		case 'iban':
			input.case = 'upper';
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.IBAN.source;
			break;
		case 'postcode':
			input.case = 'upper';
			if (!input.pattern) input.pattern =
				RegExp.PATTERN.POSTCODE.source;
			break;
		case 'submit':
		case 'reset':
			if (navigator.isFirefox)
				input.autocomplete = 'off'; // fix Firefox bug
			break;
	}
}

/**
 * Returns a static node list containing all HTML output elements associated with the input.
 * @returns {NodeList} The list of all HTML output elements associated with the input.
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
		Array.from(document.body.getElementsByTagName('input'))
			.forEach(fixInput);
	},
	onAddedNode: (node) => {
		node instanceof HTMLInputElement && fixInput(node);
	}
};
