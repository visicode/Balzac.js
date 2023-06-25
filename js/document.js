/*! js/document.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Executes a callback when the DOM content is loaded, or immediately if the DOM has already been loaded.
 * @param callback The callback function to execute.
 */
document.DOMContentLoaded || Object.defineProperties(document, {
	DOMContentLoaded: {
		value: (callback) => { // no return
			document.readyState !== 'loading'
				? callback()
				: document.addEventListener('DOMContentLoaded', _ => { // no return
					callback();
				});
		}
	}
});

/**
 * Returns a browser cookie value (undefined if not existing).
 * @param name The cookie name (case sensitive).
 */
document.getCookie || Object.defineProperties(document, {
	getCookie: {
		value: (name) => {
			const value = document.cookie?.match(/(^|;)\s*/.source
				+ encodeURIComponent(name)
				+ /\s*=\s*([^;]+)/.source)?.pop();
			return value && decodeURIComponent(value);
		}
	}
});

/**
 * Sets a browser cookie.
 * @param name The cookie name (case sensitive).
 * @param value The value to be stored.
 * @param expires The cookie expiration date (when browser closes by default).
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
 * @param name The cookie name (case sensitive).
 */
document.removeCookie || Object.defineProperties(document, {
	removeCookie: {
		value: (name) => { // no return
			document.setCookie(name, null, new Date(0));
		}
	}
});
