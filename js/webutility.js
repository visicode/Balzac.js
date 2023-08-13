/*! js/webutility.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

window.WebUtility = window.WebUtility || {};

/**
 * Converts a string into an HTML-encoded string for HTTP transmission.
 * @returns {string} The new string HTML-encoded.
 */
WebUtility.htmlEncode || Object.defineProperties(WebUtility, {
	htmlEncode: {
		value: s => s
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll('\'', '&apos;'),
		enumerable: true
	}
});

/**
 * Converts a string that has been HTML-encoded into a decoded string.
 * @returns {string} The new string HTML-decoded.
 */
WebUtility.htmlDecode || Object.defineProperties(WebUtility, {
	htmlDecode: {
		value: s => new DOMParser()
			.parseFromString(s, 'text/html')
			.documentElement.textContent,
		enumerable: true
	}
});
