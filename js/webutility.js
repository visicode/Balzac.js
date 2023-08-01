/*! js/webutility.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

window.WebUtility = window.WebUtility || {};

/**
 * Returns a string converted into an HTML-encoded string for HTTP transmission.
 */
WebUtility.htmlEncode || Object.defineProperties(WebUtility, {
	htmlEncode: {
		value: s => s
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll('\'', '&apos;')
	}
});

/**
 * Returns a string that has been HTML-encoded converted into a decoded string.
 */
WebUtility.htmlDecode || Object.defineProperties(WebUtility, {
	htmlDecode: {
		value: s => new DOMParser()
			.parseFromString(s, 'text/html')
			.documentElement.textContent
	}
});
