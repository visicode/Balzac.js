/*! js/string.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Checks if a string is all in uppercase letters.
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
 */
String.prototype.toTitleCase || Object.defineProperties(String.prototype, {
	toTitleCase: {
		value: function () { // preserves `this`
			return (this.length > 3 && this.isUpperCase() ? this.toLowerCase() : this)
				.replace(/\w\S*/g, match => match.charAt(0).toUpperCase() + match.substr(1))
				.replaceAll('  ', ' ')
				.trimAll();
		}
	}
});

/**
 * Returns a string converted to sentence case (first word of every sentence capitalized).
 */
String.prototype.toSentenceCase || Object.defineProperties(String.prototype, {
	toSentenceCase: {
		value: function () { // preserves `this`
			return (this.length > 3 && this.isUpperCase() ? this.toLowerCase() : this)
				.replace(/(^\s*\w{1}|[.!?]\s+\w{1})/gm, match => match.toUpperCase())
				.replaceAll('  ', ' ')
				.trimAll();
		}
	}
});

/**
 * Returns a string with leading and trailing white space and line terminator characters removed from each line.
 */
String.prototype.trimAll || Object.defineProperties(String.prototype, {
	trimAll: {
		value: function () { // preserves `this`
			return this
				.replace(/(^ +| +$)/gm, '')
				.trim();
		}
	}
});

/**
 * Returns a string truncated to the nearest word, with a trailing ellipsis if needed.
 * @param max The maximum number of returned characters.
 */
String.prototype.truncate || Object.defineProperties(String.prototype, {
	truncate: {
		value: function (max) { // preserves `this`
			if (max > 0 && this.length > max) {
				const text = this.substr(0, max),
					last = text.search(/[^\w]+(?:.(?![^\w]))+$/g);
				return text.substr(0, last > 0 ? last : max - 1) + '…';
			}
			else
				return this.valueOf();
		}
	}
});

/**
 * Returns a string converted into an HTML-encoded string for HTTP transmission.
 */
String.prototype.htmlEncode || Object.defineProperties(String.prototype, {
	htmlEncode: {
		value: function () { // preserves `this`
			return this
				.replaceAll('&', '&amp;')
				.replaceAll('<', '&lt;')
				.replaceAll('>', '&gt;')
				.replaceAll('"', '&quot;')
				.replaceAll('\'', '&apos;');
		}
	}
});

/**
 * Returns a string that has been HTML-encoded converted into a decoded string.
 */
String.prototype.htmlDecode || Object.defineProperties(String.prototype, {
	htmlDecode: {
		value: function () { // preserves `this`
			return new DOMParser()
				.parseFromString(this, 'text/html')
				.documentElement.textContent;
		}
	}
});

/**
 * Returns an HTML string converted to plain text, with all HTML tags removed.
 */
String.prototype.toPlainText || Object.defineProperties(String.prototype, {
	toPlainText: {
		value: function () { // preserves `this`
			return this
				// treat new lines and subsequent indents as white spaces
				.replace(/(\r\n|\n|\r)[ \t]*/g, ' ')
				// remove special HTML blocks
				.replace(/<(audio|canvas|noscript|script|style|video)\b.*?<\/\1>/gi, '')
				// convert block-level HTML tags to new lines
				.replace(/<\/?(address|article|aside|blockquote|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|li|main|nav|ol|p|pre|section|table|tfoot|ul)\b[^>]*>/gi, '\n')
				// convert special HTML tags to new lines
				.replace(/<(br|hr)\s*\/?>/gi, '\n')
				// remove remaining HTML tags
				.replace(/<[^>]+>/g, '')
				.replaceAll('  ', ' ')
				.trimAll()
				.htmlDecode();
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
