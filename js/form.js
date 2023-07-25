/*! js/form.js | MIT License | github.com/visicode/Balzac.js */
'use strict';
import './document.js';

const USER_INVALID_CLASS = 'user-invalid';

/**
 * - Adds "user-invalid" class to invalid form and form elements after user interaction, emulating the poorly-supported ":user-invalid" pseudo-class.
 * - Clears content of HTML output elements when resetting form.
 */
function fixForm(form) {
	Array.from(form.elements).forEach(element => {
		if (element.validity) {
			element.addEventListener('change', _ => {
				element.classList.toggle(USER_INVALID_CLASS, !element.validity.valid);
				form.classList.toggle(USER_INVALID_CLASS, !element.validity.valid
					|| Array.from(form.elements).some(el => el.classList.contains(USER_INVALID_CLASS))
				);
			});
			element.addEventListener('invalid', _ => {
				element.classList.add(USER_INVALID_CLASS);
				form.classList.add(USER_INVALID_CLASS);
			});
		}
	});
	form.addEventListener('reset', _ => {
		Array.from(form.elements).forEach(element => {
			if (element.validity) {
				element.classList.remove(USER_INVALID_CLASS);
				if (element instanceof HTMLOutputElement)
					element.textContent = '';
			}
		});
		form.classList.remove(USER_INVALID_CLASS);
	});
}

export default {
	onInit: () => {
		Array.from(document.forms).forEach(fixForm);
	},
	onAddedNode: (node) => {
		node instanceof HTMLFormElement && fixForm(node);
	}
};
