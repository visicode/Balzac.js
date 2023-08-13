/*! balzac.js v0.1.2 | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**** JavaScript objets enhancements */
import './js/number.js';		// Number object enhancements
import './js/math.js';			// Math object enhancements
import './js/string.js';		// String object enhancements
import './js/date.js';			// Date object enhancements
import './js/regexp.js';		// RegExp object enhancements
import './js/navigator.js';		// Navigator object enhancements
import './js/document.js';		// Document object enhancements
import './js/file.js';			// File object enhancements

/**** JavaScript new objets */
import './js/webutility.js';	// WebUtility new object
import './js/fetch.js';			// Fetch new object

/**** HTML elements enhancements */
import HTMLElementConfig from './js/element.js';		// HTML element enhancements
import HTMLFormElementConfig from './js/form.js';		// HTML form element enhancements
import HTMLInputElementConfig from './js/input.js';		// HTML input element enhancements

function BalzacInit() {
	HTMLInputElementConfig.onInit(); // before HTMLElementConfig for case support
	HTMLElementConfig.onInit();
	HTMLFormElementConfig.onInit();

	new MutationObserver((mutations, _) => {
		mutations.forEach(mutation => {
			switch (mutation.type) {
				case 'childList':
					mutation.addedNodes.forEach(node => {
						HTMLFormElementConfig.onAddedNode(node);
						HTMLInputElementConfig.onAddedNode(node);
					});
					break;
				case 'attributes':
					HTMLElementConfig.onSetAttribute(mutation.attributeName, mutation.target);
					break;
			}
		});
	}).observe(document.body, {
		childList: true,
		attributes: true,
		subtree: true
	});
}

document.readyState === 'loading'
	? document.addEventListener('DOMContentLoaded', BalzacInit, true) // capture mode to trigger earlier
	: setTimeout(BalzacInit, 0);

console.warn('Consider using Balzac.js minified version to improve your page performance.');
