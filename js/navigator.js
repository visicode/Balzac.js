/*! js/navigator.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if user navigator is Google Chrome.
 */
navigator.isChrome || Object.defineProperties(navigator, {
	isChrome: {
		value: !!window.chrome
			&& / Chrome| Chromium| crios/i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Microsoft Edge.
 */
navigator.isEdge || Object.defineProperties(navigator, {
	isEdge: {
		value: / Edge| Edg\//i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Mozilla Firefox.
 */
navigator.isFirefox || Object.defineProperties(navigator, {
	isFirefox: {
		value: / Firefox| fxios/i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Opera.
 */
navigator.isOpera || Object.defineProperties(navigator, {
	isOpera: {
		value: / Opera| OPR\//i.test(navigator.userAgent)
	}
});

/**
 * Checks if user navigator is Apple Safari.
 */
navigator.isSafari || Object.defineProperties(navigator, {
	isSafari: {
		value: / Safari/i.test(navigator.userAgent)
	}
});
