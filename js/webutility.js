/*! ./js/webutility.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

globalThis.WebUtility = globalThis.WebUtility || {};

if (!globalThis.DOMParser) // no web browser
	// load named HTML entities from JSON file
	var { default: htmlEntities } = await import('../data/entities.json', {
		assert: { type: 'json' }
	});

/**
 * Converts a string into an HTML-encoded string for HTTP transmission.
 * @param {string} string The string to encode.
 * @returns {string} The new string HTML-encoded.
 */
WebUtility.htmlEncode || Object.defineProperties(WebUtility, {
	htmlEncode: {
		value: string => string
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll('\'', '&apos;')
			.replaceAll('`', '&grave;'),
		enumerable: true
	}
});

/**
 * Converts a string that has been HTML-encoded into a decoded string.
 * @param {string} string The string to decode.
 * @returns {string} The new string HTML-decoded.
 */
WebUtility.htmlDecode || Object.defineProperties(WebUtility, {
	htmlDecode: {
		value: string => string
			.replaceAll('&grave;', '`')
			.replaceAll('&apos;', '\'')
			.replaceAll('&quot;', '"')
			.replaceAll('&gt;', '>')
			.replaceAll('&lt;', '<')
			.replaceAll('&amp;', '&'),
		enumerable: true
	}
});

/**
 * Replaces all special characters of a string (other than letters, numbers and separators) with the specified replacement string.
 * @param {string} string The string containing the special characters to be replaced.
 * @param {string} replacement The replacement string (empty string by default).
 * @returns {string} The new string with all special characters replaced.
 */
WebUtility.stripSpecialChars || Object.defineProperties(WebUtility, {
	stripSpecialChars: {
		value: (string, replacement) => string
			.replace(/[^\w\d\s]/g, replacement || '')
	}
});

/**
 * Converts a string with all new lines replaced with HTML line breaks.
 * @param {string} string The string containing the new lines to be replaced.
 * @returns {string} The new string with new lines converted to HTML line breaks.
 */
WebUtility.nl2br || Object.defineProperties(WebUtility, {
	nl2br: {
		value: string => string
			.replace(/\r?\n/g, '<br />')
	}
});

/**
 * Converts a string with all new lines replaced with HTML paragraphs.
 * @param {string} string The string containing the new lines to be replaced.
 * @returns {string} The new string with new lines converted to HTML paragraphs.
 */
WebUtility.nl2p || Object.defineProperties(WebUtility, {
	nl2p: {
		value: string => '<p>' + string
			.replace(/\r?\n/g, '</p><p>')
			+ '</p>'
	}
});

/**
 * Converts an HTML string to plain text, with all HTML tags and entities removed.
 * @param {string} string The HTML string to be converted to plain text.
 * @returns {string} The new string with all HTML tags and entities removed.
 */
WebUtility.toPlainText || Object.defineProperties(WebUtility, {
	toPlainText: {
		value: string => {
			const text = string
				// treat new lines and subsequent indents as white spaces
				.replace(/\r?\n[ \t]*/g, ' ')
				// remove special HTML blocks
				.replace(/<(audio|canvas|noscript|script|style|video)\b.*?<\/\1>/gi, '')
				// convert block-level HTML tags to new lines
				.replace(/<\/?(address|article|aside|blockquote|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|li|main|nav|ol|p|pre|section|table|tfoot|ul)\b[^>]*>/gi, '\n')
				// convert special HTML tags to new lines
				.replace(/<(br|hr)\s*\/?>/gi, '\n')
				// remove remaining HTML tags
				.replace(/<[a-z!/][^>]*>/gi, '')
				// remove leading and trailing spaces from each line
				.replace(/(^ +| +$)/gm, '')
				// remove double spaces
				.replaceAll('  ', ' ');

			if (htmlEntities) {
				return text
					// convert hexadecimal HTML entities
					.replace(/&#x([a-fA-F0-9]+);/g, (_, hex) =>
						String.fromCharCode(parseInt(hex, 16))
					)
					// convert decimal HTML entities
					.replace(/&#([0-9]+);/g, (_, dec) =>
						String.fromCharCode(parseInt(dec, 10))
					)
					// convert named HTML entities
					.replace(/&(\w+);/g, (_, entity) =>
						String.fromCharCode(htmlEntities[entity])
					);
			}
			else
				return new DOMParser()
					.parseFromString(text, 'text/html')
					.documentElement.textContent;
		}
	}
});

WebUtility.PASSWORD_STRENGTH || Object.defineProperties(WebUtility, {
	PASSWORD_STRENGTH: {
		value: Object.freeze({
			EMPTY: 0,	// Empty.
			SHORT: 1,	// Less than 8 characters.
			WEAK: 2,	// One or two of the PASSWORD_STRENGTH.GOOD criteria.
			MEDIUM: 3,	// Three of the PASSWORD_STRENGTH.GOOD criteria.
			GOOD: 4,	// At least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.
			STRONG: 5	// All PASSWORD_STRENGTH.GOOD criteria and greater than or equal to 12 characters.
		})
	}
});

/**
 * Returns a password strength.
 * @param {string} password The string containing the password to rate.
 * @returns {number} The password strength from PASSWORD_STRENGTH.EMPTY to PASSWORD_STRENGTH.STRONG.
 */
WebUtility.getPasswordStrength || Object.defineProperties(WebUtility, {
	getPasswordStrength: {
		value: password => {
			const score = password
				? password.length >= 8
					? Math.max(/[a-z]/.test(password) // lowercase letter
						+ /[A-Z]/.test(password) // uppercase letter
						+ /\d/.test(password) // decimal digit
						+ /\W/.test(password), // non-word character
						WebUtility.PASSWORD_STRENGTH.WEAK)
					: WebUtility.PASSWORD_STRENGTH.SHORT
				: WebUtility.PASSWORD_STRENGTH.EMPTY;
			return score < WebUtility.PASSWORD_STRENGTH.GOOD || password.length < 12
				? score
				: WebUtility.PASSWORD_STRENGTH.STRONG;
		}
	}
});
