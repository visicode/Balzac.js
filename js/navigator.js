/*! ./js/navigator.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if user navigator is Google Chrome.
 * @returns {boolean} true if user navigator is Google Chrome, otherwise false.
 */
navigator.isChrome || Object.defineProperties(navigator, {
	isChrome: {
		value: !!window.chrome
			&& / Chrome| Chromium| crios/i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Microsoft Edge.
 * @returns {boolean} true if user navigator is Microsoft Edge, otherwise false.
 */
navigator.isEdge || Object.defineProperties(navigator, {
	isEdge: {
		value: / Edge| Edg\//i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Mozilla Firefox.
 * @returns {boolean} true if user navigator is Mozilla Firefox, otherwise false.
 */
navigator.isFirefox || Object.defineProperties(navigator, {
	isFirefox: {
		value: / Firefox| fxios/i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Opera.
 * @returns {boolean} true if user navigator is Opera, otherwise false.
 */
navigator.isOpera || Object.defineProperties(navigator, {
	isOpera: {
		value: / Opera| OPR\//i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Apple Safari.
 * @returns {boolean} true if user navigator is Apple Safari, otherwise false.
 */
navigator.isSafari || Object.defineProperties(navigator, {
	isSafari: {
		value: / Safari/i.test(navigator.userAgent)
	}
});
