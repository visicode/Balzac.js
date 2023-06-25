/*! js/string.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Returns a string converted to title case (every major word capitalized).
 */
String.prototype.toTitleCase || Object.defineProperties(String.prototype, {
	toTitleCase: {
		value: function () { // preserves `this`
			return (this == this.toUpperCase() && this.length > 3 ? this.toLowerCase() : this)
				.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substr(1))
				.trim().replace(/(\s)\s+/g, '$1');
		}
	}
});

/**
 * Returns a string converted to sentence case (first word of every sentence capitalized).
 */
String.prototype.toSentenceCase || Object.defineProperties(String.prototype, {
	toSentenceCase: {
		value: function () { // preserves `this`
			return (this == this.toUpperCase() && this.length > 3 ? this.toLowerCase() : this)
				.replace(/(^\s*\w{1}|\.\s+\w{1})/gm, letter => letter.toUpperCase())
				.trim().replace(/(\s)\s+/g, '$1');
		}
	}
});

/**
 * Returns a string truncated to the nearest word, with HTML tags removed and a trailing ellipsis added if needed.
 * @param max The maximum number of returned characters.
 */
String.prototype.truncate || Object.defineProperties(String.prototype, {
	truncate: {
		value: function (max) { // preserves `this`
			if (max > 0 && this.length > max) {
				const text = this.stripTags().substr(0, max),
					last = text.search(/[^\w]+(?:.(?![^\w]))+$/gi);
				return text.substr(0, last > 0 ? last : max - 1) + '…';
			}
			else
				return this.valueOf();
		}
	}
});

/**
 * Returns an HTML string encoded to prevent cross-site scripting (XSS) attacks.
 */
String.prototype.encodeHtml || Object.defineProperties(String.prototype, {
	encodeHtml: {
		value: function () { // preserves `this`
			return this.replaceAll('&', '&amp;')
				.replaceAll('<', '&lt;')
				.replaceAll('>', '&gt;')
				.replaceAll('"', '&quot;')
				.replaceAll('\'', '&apos;');
		}
	}
});

/**
 * Returns an HTML string in plain text, with all HTML tags removed.
 */
String.prototype.stripTags || Object.defineProperties(String.prototype, {
	stripTags: {
		value: function () { // preserves `this`
			return this.replace(/(<([^>]+)>)/gi, '');
		}
	}
});

/**
 * Returns a string with new lines converted to HTML line breaks.
 */
String.prototype.nl2br || Object.defineProperties(String.prototype, {
	nl2br: {
		value: function () { // preserves `this`
			return this.replace(/(\r\n|\n|\r)/g, '<br />');
		}
	}
});

/**
 * Returns a string with new lines converted to HTML paragraphs.
 */
String.prototype.nl2p || Object.defineProperties(String.prototype, {
	nl2p: {
		value: function () { // preserves `this`
			return '<p>' + this.replace(/(\r\n|\n|\r)/g, '</p><p>') + '</p>';
		}
	}
});
