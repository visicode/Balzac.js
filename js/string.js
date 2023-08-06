/*! js/string.js | MIT License | github.com/visicode/Balzac.js */
'use strict';
import './webutility.js';

/**
 * Checks if a string is all in uppercase letters.
 * @returns {boolean} true if the string is all in uppercase letters, otherwise false.
 */
String.prototype.isUpperCase || Object.defineProperties(String.prototype, {
	isUpperCase: {
		value: function () { // preserves `this`
			return ![...this].some(c => c !== c.toUpperCase());
		}
	}
});

/**
 * Checks if a string is all in lowercase letters.
 * @returns {boolean} true if the string is all in lowercase letters, otherwise false.
 */
String.prototype.isLowerCase || Object.defineProperties(String.prototype, {
	isLowerCase: {
		value: function () { // preserves `this`
			return ![...this].some(c => c !== c.toLowerCase());
		}
	}
});

/**
 * Returns a string converted to title case (every major word capitalized).
 * @returns {string} The new string converted to title case.
 */
String.prototype.toTitleCase || Object.defineProperties(String.prototype, {
	toTitleCase: {
		value: function () { // preserves `this`
			return (this.length > 3 && this.isUpperCase() ? this.toLowerCase() : this)
				.replace(/\w\S*/g, match => match.charAt(0).toUpperCase() + match.substr(1))
				.replaceAll('  ', ' ')
				.trimLines();
		}
	}
});

/**
 * Returns a string converted to sentence case (first word of every sentence capitalized).
 * @returns {string} The new string converted to sentence case.
 */
String.prototype.toSentenceCase || Object.defineProperties(String.prototype, {
	toSentenceCase: {
		value: function () { // preserves `this`
			return (this.length > 3 && this.isUpperCase() ? this.toLowerCase() : this)
				.replace(/(^\s*\w{1}|[.!?]\s+\w{1})/gm, match => match.toUpperCase())
				.replaceAll('  ', ' ')
				.trimLines();
		}
	}
});

/**
 * Returns a string with leading and trailing white space and line terminator characters removed from each line.
 * @returns {string} The new string with leading and trailing white space and line terminator characters removed from each line.
 */
String.prototype.trimLines || Object.defineProperties(String.prototype, {
	trimLines: {
		value: function () { // preserves `this`
			return this
				.replace(/(^ +| +$)/gm, '')
				.trim();
		}
	}
});

/**
 * Returns a string truncated to the nearest word, with a trailing ellipsis if needed.
 * @param {number} max The maximum number of characters to return.
 * @returns {string} The new string truncated to the nearest word.
 */
String.prototype.truncate || Object.defineProperties(String.prototype, {
	truncate: {
		value: function (max) { // preserves `this`
			if (max >= 1 && this.length > max) { // if decimal
				const text = this.substr(0, max),
					last = text.search(/\W+(?:.(?!\W))+$/g);
				return text.substr(0, last > 0 ? last : max - 1) + '…';
			}
			else
				return this.valueOf();
		}
	}
});

/**
 * Returns only the first lines of a string.
 * @param {number} lines The number of lines to return.
 * @returns {string} The new string reduced to the specified number of lines.
 */
String.prototype.firstLines || Object.defineProperties(String.prototype, {
	firstLines: {
		value: function (lines) { // preserves `this`
			return this.split(/\r?\n/g, lines)
				.join('\n');
		}
	}
});

/**
 * Returns an HTML string converted to plain text, with all HTML tags removed.
 * @returns {string} The new string with all HTML tags removed.
 */
String.prototype.toPlainText || Object.defineProperties(String.prototype, {
	toPlainText: {
		value: function () { // preserves `this`
			return WebUtility.htmlDecode(this
				// treat new lines and subsequent indents as white spaces
				.replace(/\r?\n[ \t]*/g, ' ')
				// remove special HTML blocks
				.replace(/<(audio|canvas|noscript|script|style|video)\b.*?<\/\1>/gi, '')
				// convert block-level HTML tags to new lines
				.replace(/<\/?(address|article|aside|blockquote|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|li|main|nav|ol|p|pre|section|table|tfoot|ul)\b[^>]*>/gi, '\n')
				// convert special HTML tags to new lines
				.replace(/<(br|hr)\s*\/?>/gi, '\n')
				// remove remaining HTML tags
				.replace(/<[^>]+>/g, '')
				.replaceAll('  ', ' ')
				.trimLines()
			);
		}
	}
});

/**
 * Returns a string with new lines converted to HTML line breaks.
 * @returns {string} The new string with new lines converted to HTML line breaks.
 */
String.prototype.nl2br || Object.defineProperties(String.prototype, {
	nl2br: {
		value: function () { // preserves `this`
			return this.replace(/\r?\n/g, '<br />');
		}
	}
});

/**
 * Returns a string with new lines converted to HTML paragraphs.
 * @returns {string} The new string with new lines converted to HTML paragraphs.
 */
String.prototype.nl2p || Object.defineProperties(String.prototype, {
	nl2p: {
		value: function () { // preserves `this`
			return '<p>' + this.replace(/\r?\n/g, '</p><p>') + '</p>';
		}
	}
});
