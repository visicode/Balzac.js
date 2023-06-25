# Balzac.js

> A JavaScript library that enhance your browser.

**Test page**

https://raw.githack.com/visicode/Balzac.js/master/test.html

**Download**

https://raw.githubusercontent.com/visicode/Balzac.js/master/balzac.min.js


## What does it do?

* Adds missing functionalities to web browsers.
* Brings expected behavior to some incomplete features.
* Gently overwrites JavaScript build-in objects.


## What is it not?

* A polyfill library (use [Polyfill.io](https://polyfill.io/) for that).
* A JavaScript framework.


## Browser support

* ES6+
* Needs to have JavaScript enabled


## Usage

To use Balzac.js, include the balzac.min.js file between the `<head>` tags of your HTML document with the `async` attribute.

```javascript
<script async type="text/javascript" src="balzac.min.js"></script>
```


## Documentation

Yes, we do overwrite JavaScript build-in objects!\
And we'd love our addings to be implemented in web browsers, so we'll remove them from the library.

### JavaScript objets enhancements

**Date object enhancements**

```javascript
/**
 * Checks if a date is between the specified interval, bounds included.
 * @param start The starting date.
 * @param end The ending date.
 */
bool = new Date().between(start, end);

/**
 * Checks if a date is between the specified interval, bounds excluded.
 * @param start The starting date.
 * @param end The ending date.
 */
bool = new Date().betweenExclusive(start, end);

/**
 * Returns a new Date that adds the specified number of milliseconds to the value of this instance.
 * @param value A number of milliseconds. The value parameter can be negative or positive.
 */
date = new Date().addMilliseconds(value);

/**
 * Returns a new Date that adds the specified number of seconds to the value of this instance.
 * @param value A number of seconds. The value parameter can be negative or positive.
 */
date = new Date().addSeconds(value);

/**
 * Returns a new Date that adds the specified number of minutes to the value of this instance.
 * @param value A number of minutes. The value parameter can be negative or positive.
 */
date = new Date().addMinutes(value);

/**
 * Returns a new Date that adds the specified number of hours to the value of this instance.
 * @param value A number of hours. The value parameter can be negative or positive.
 */
date = new Date().addHours(value);

/**
 * Returns a new Date that adds the specified number of days to the value of this instance.
 * @param value A number of days. The value parameter can be negative or positive.
 */
date = new Date().addDays(value);

/**
 * Returns a new Date that adds the specified number of months to the value of this instance.
 * @param value A number of months. The value parameter can be negative or positive.
 */
date = new Date().addMonths(value);

/**
 * Returns a new Date that adds the specified number of years to the value of this instance.
 * @param value A number of years. The value parameter can be negative or positive.
 */
date = new Date().addYears(value);
```

**Math object enhancements**

```javascript
/**
 * Returns a numeric expression rounded to a specified number of fractional digits.
 * @param x The value to be rounded.
 * @param decimals The number of fractional digits.
 */
number = Math.roundTo(x, decimals);
```

**Number object enhancements**

```javascript
/**
 * Checks if a number is between two values, bounds included.
 * @param min The minimum value.
 * @param max The maximum value.
 */
bool = new Number().between(min, max);

/**
 * Checks if a number is between two values, bounds excluded.
 * @param min The minimum value.
 * @param max The maximum value.
 */
bool = new Number().betweenExclusive(min, max);

/**
 * Returns the string representation of a number in hexadecimal base.
 */
string = new Number().toHex();
```

**String object enhancements**

```javascript
/**
 * Returns a string converted to title case (every major word capitalized).
 */
string = new String().toTitleCase();

/**
 * Returns a string converted to sentence case (first word of every sentence capitalized).
 */
string = new String().toSentenceCase();

/**
 * Returns a string truncated to the nearest word, with HTML tags removed and a trailing ellipsis added if needed.
 * @param max The maximum number of returned characters.
 */
string = new String().truncate(max);

/**
 * Returns an HTML string encoded to prevent cross-site scripting (XSS) attacks.
 */
string = new String().encodeHtml();

/**
 * Returns an HTML string in plain text, with all HTML tags removed.
 */
string = new String().stripTags();

/**
 * Returns a string with new lines converted to HTML line breaks.
 */
string = new String().nl2br();

/**
 * Returns a string with new lines converted to HTML paragraphs.
 */
string = new String().nl2p();
```

**RegExp object enhancements**

```javascript
/**
 * Adds predefined input RegExp patterns to RegExp.INPUT_PATTERN object.
 *   EMAIL:		email address format following official specification
 *   EMAILS:	1 or more email addresses, separated by commas
 *   PHONE:		phone number in international or local format, with optional extension
 *   PASSWORD:	8 characters minimum password with at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character
 *   PASSPORT:	passport number in international format
 */
```

**Navigator object enhancements**

```javascript
/**
 * Checks if user navigator is Google Chrome
 */
bool = navigator.isChrome;

/**
 * Checks if user navigator is Microsoft Edge
 */
bool = navigator.isEdge;

/**
 * Checks if user navigator is Mozilla Firefox
 */
bool = navigator.isFirefox;

/**
 * Checks if user navigator is Opera
 */
bool = navigator.isOpera;

/**
 * Checks if user navigator is Apple Safari
 */
bool = navigator.isSafari;
```

**Document object enhancements**

```javascript
/**
 * Executes a callback when the DOM content is loaded, or immediately if the DOM has already been loaded.
 * @param callback The callback function to execute.
 */
document.DOMContentLoaded(callback);

/**
 * Returns a browser cookie value (undefined if not existing).
 * @param name The cookie name (case sensitive).
 */
string = document.getCookie(name);

/**
 * Sets a browser cookie.
 * @param name The cookie name (case sensitive).
 * @param value The value to be stored.
 * @param expires The cookie expiration date (when browser closes by default).
 */
document.setCookie(name, value, expires);

/**
 * Deletes a browser cookie.
 * @param name The cookie name (case sensitive).
 */
document.removeCookie(name);
```

### HTML elements enhancements

**HTML element enhancements**

* Adds new `case` attribute to all input elements to force text case (`"none"`, `"lower"`, `"upper"`, `"title"` or `"sentence"`).

```javascript
/**
 * Gets or sets the 'case' attribute value to force text input case.
 * @param value The text case to apply ("none", "lower", "upper", "title" or "sentence").
 */
string = document.getElementById('input').case = "sentence";
```

**HTML form element enhancements**

* Adds `"user-invalid"` class to invalid form and form elements after user interaction, emulating the poorly-supported `":user-invalid"` pseudo-class.

**HTML input element enhancements**

* Improves default `"email"` validation pattern (cf. RegExp.INPUT_PATTERN.EMAIL and RegExp.INPUT_PATTERN.EMAILS).
* Improves default `"tel"` validation pattern (cf. RegExp.INPUT_PATTERN.PHONE).
* Adds default `"password"` validation pattern (cf. RegExp.INPUT_PATTERN.PASSWORD).
* Adds new `"passport"` input type (cf. RegExp.INPUT_PATTERN.PASSPORT).
* Fixes `"submit"` and `"reset"` buttons behavior bug in Firefox ([#654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072)).

```javascript
/**
 * Returns the password strength from HTMLInputElement.PASSWORD_RATING.EMPTY to HTMLInputElement.PASSWORD_RATING.STRONG.
 *   EMPTY:		empty
 *   SHORT:		less than 8 characters
 *   WEAK:		1 or 2 of the PASSWORD_RATING.GOOD criteria
 *   FAIR:		3 of the PASSWORD_RATING.GOOD criteria
 *   GOOD:		at least 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character
 *   STRONG:	all PASSWORD_RATING.GOOD criteria and greater than or equal to 12 characters
 */
rating = document.getElementById('passwordInput').getPasswordRating();

/**
 * Returns an array containing all HTML output elements associated with the input.
 */
array = document.getElementById('input').getOutputs();
```


## Known issues

* Changing the `type` attribute of an HTML input element will cause unexpected behavior.
* HTML elements must be contained in a form in order to receive the new `"user-invalid"` class.


## Acknowledgements

Balzac.js is a project by [Alexandre Gastaud](https://github.com/visicode).
