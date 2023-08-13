/*! js/document.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Gets a browser cookie value.
 * @param {string} name The cookie name (case sensitive).
 * @returns {(string|null)} The cookie value if existing, otherwise null.
 */
document.getCookie || Object.defineProperties(document, {
	getCookie: {
		value: (name) => {
			const matches = document.cookie.match(/(^|;)\s*/.source
				+ encodeURIComponent(name)
				+ /\s*=\s*([^;]+)/.source);
			return matches && decodeURIComponent(matches[2]);
		}
	}
});

/**
 * Sets a browser cookie.
 * @param {string} name The cookie name (case sensitive).
 * @param {(string|number|boolean)} value The value to be stored.
 * @param {Date} expires The cookie expiration date (when browser closes by default).
 */
document.setCookie || Object.defineProperties(document, {
	setCookie: {
		value: (name, value, expires) => { // no return
			document.cookie = encodeURIComponent(name)
				+ '=' + encodeURIComponent(value)
				+ (expires ? ';expires=' + expires.toUTCString() : '')
				+ ';path=/';
		}
	}
});

/**
 * Deletes a browser cookie.
 * @param {string} name The cookie name (case sensitive).
 */
document.removeCookie || Object.defineProperties(document, {
	removeCookie: {
		value: (name) => { // no return
			document.setCookie(name, null, new Date(0));
		}
	}
});
