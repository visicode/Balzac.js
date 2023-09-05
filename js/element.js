/*! js/element.js | MIT License | github.com/visicode/Balzac.js */
'use strict';
import './string.js';

function setCase(e) {
	switch (e.target.case) {
		case 'none':
			e.target.style.textTransform = 'initial';
			break;
		case 'lower':
			e.target.style.textTransform = 'lowercase';
			if (e.target.validity.valid) e.target.value =
				e.target.value.toLowerCase().trimLines();
			break;
		case 'upper':
			e.target.style.textTransform = 'uppercase';
			if (e.target.validity.valid) e.target.value =
				e.target.value.toUpperCase().trimLines();
			break;
		case 'title':
			e.target.style.textTransform = 'none';
			if (e.target.validity.valid) e.target.value =
				e.target.value.toTitleCase();
			break;
		case 'sentence':
			e.target.style.textTransform = 'none';
			if (e.target.validity.valid) e.target.value =
				e.target.value.toSentenceCase();
			break;
	}
}

/**
 * - Adds new 'case' attribute to all input elements to force text case ("none", "lower", "upper", "title" or "sentence").
 */
function fixElement(input) {
	if (input.validity) {
		setCase({ target: input });
		input.addEventListener('change', setCase);
	}
}

/**
 * Gets or sets the 'case' attribute value to force text input case.
 * @param {string} value The text case to apply ("none", "lower", "upper", "title" or "sentence").
 * @returns {string} The text case attribute if set, otherwise "none".
 */
HTMLElement.prototype.case || Object.defineProperties(HTMLElement.prototype, {
	case: {
		get: function () { // preserves `this`
			const value = (this.getAttribute('case') || '').toLowerCase(); //TODO; use `?.` syntax for ES11+
			return ['lower', 'upper', 'title', 'sentence'].includes(value)
				? value
				: 'none';
		},
		set: function (value) { // preserves `this`
			this.setAttribute('case', value);
		},
		enumerable: true
	}
});

export default {
	onInit: () => {
		Array.from(document.querySelectorAll('[case]')).forEach(fixElement);
	},
	onSetAttribute: (name, target) => {
		name === 'case' && fixElement(target);
	}
};
