/*! ./js/form.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

const USER_INVALID_CLASS = 'user-invalid';

function setFocus() {
	if (document.activeElement === document.body) // no element already focused
		Array.from(document.forms).find(form => {
			const rect = form.getBoundingClientRect();
			if (rect.top < window.innerHeight && rect.bottom >= 0) { // form visible
				const first = Array.from(form.elements).find(element =>
					element.tabIndex > -1
					&& !element.disabled
					&& !element.readOnly);
				if (first) {
					first.focus();
					return true; // input found, exit forms loop
				}
			}
			return false;
		});
}

/**
 * - Automatic focus on the first input field of the currently visible form.
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
		setFocus();
	});

	window.addEventListener('scroll', setFocus);
	setFocus();
}

export default {
	onInit: () => {
		Array.from(document.forms)
			.forEach(fixForm);
	},
	onAddedNode: (node) => {
		node instanceof HTMLFormElement && fixForm(node);
	}
};
