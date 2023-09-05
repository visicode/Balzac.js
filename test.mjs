'use strict';

/**** JavaScript objets enhancements */
import './js/number.js';		// Number object enhancements
import './js/math.js';			// Math object enhancements
import './js/string.js';		// String object enhancements
import './js/date.js';			// Date object enhancements
import './js/regexp.js';		// RegExp object enhancements
import './js/file.js';			// File object enhancements

/**** JavaScript new objets */
import './js/webutility.js';	// WebUtility new object
import './js/fetch.js';			// Fetch new object

/**** Balzac.js JavaScript library – Node.js tests */
await Fetch.get('https://cdn.jsdelivr.net/gh/visicode/Balzac.js/balzac.js')
	.then(response => response.ok && response.text())
	.then(text => console.log(text.firstLines(1), '\n'));

await Fetch.get('https://raw.githack.com/visicode/Balzac.js/master/test.html')
	.then(response => response.ok && response.text())
	.then(text => console.log(WebUtility.toPlainText(text).truncate(200).toSentenceCase(), '\n'));

const strengthMessages = ['Empty', 'Too short', 'Weak', 'Medium', 'Good', 'Strong'];
console.log('Password strength:',
	strengthMessages[WebUtility.getPasswordStrength('Abcde12345*!')]);
