# Balzac.js

> A JavaScript library that enhance your browser

**Test page**

https://raw.githack.com/visicode/Balzac.js/master/test.html

**Download**

https://raw.githubusercontent.com/visicode/Balzac.js/master/balzac.min.js


## What does it do?

* Adds missing functionalities to javascript engines.
* Brings expected behavior to some incomplete features.
* Enhance existing HTML elements.
* Gently overwrites JavaScript build-in objects.


## What is it not?

* A polyfill library (use [Polyfill.io](https://polyfill.io/) for that).
* A JavaScript framework.


## Browser support

* ES6+
* Needs to have JavaScript enabled


## Usage

To use Balzac.js, include the balzac.min.js file between the `<head>` tags of your HTML document with the `defer` attribute.

```javascript
<script defer type="text/javascript" src="balzac.min.js"></script>
```


## Documentation

Yes, we do overwrite some JavaScript build-in objects!\
And we'd love our enhancements to be added in web browsers, so we'd remove them from the library.

* [JavaScript objets enhancements](#docjs)
* [JavaScript new objets](#docjsnew)
* [HTML elements enhancements](#dochtml)

<a id="docjs"></a>

### JavaScript objets enhancements

**Number object enhancements**

```javascript
/**
 * Checks if a number is between two values, bounds included.
 *  min:        The minimum value.
 *  max:        The maximum value.
 */
bool = number.isBetween(min, max);

/**
 * Checks if a number is between two values, bounds excluded.
 *  min:        The minimum value.
 *  max:        The maximum value.
 */
bool = number.isBetweenExclusive(min, max);
```

**Math object enhancements**

```javascript
/**
 * Returns a numeric expression rounded to a specified number of fractional digits.
 *  x:          The value to be rounded.
 *  decimals:   The number of fractional digits.
 */
number = Math.roundTo(x, decimals);
```

**String object enhancements**

```javascript
/**
 * Checks if a string is all in uppercase letters.
 */
bool = string.isUpperCase();

/**
 * Checks if a string is all in lowercase letters.
 */
bool = string.isLowerCase();

/**
 * Returns a string converted to title case (every major word capitalized).
 */
string = string.toTitleCase();

/**
 * Returns a string converted to sentence case (first word of every sentence capitalized).
 */
string = string.toSentenceCase();

/**
 * Returns a string with leading and trailing white space and line terminator characters removed from each line.
 */
string = string.trimAll();

/**
 * Returns a string truncated to the nearest word, with a trailing ellipsis if needed.
 *  max:        The maximum number of returned characters.
 */
string = string.truncate(max);

/**
 * Returns an HTML string converted to plain text, with all HTML tags removed.
 */
string = string.toPlainText();

/**
 * Returns a string with new lines converted to HTML line breaks.
 */
string = string.nl2br();

/**
 * Returns a string with new lines converted to HTML paragraphs.
 */
string = string.nl2p();
```

**Date object enhancements**

```javascript
/**
 * Adds duration constants to new Date.DURATION object for converting delays into milliseconds.
 *  SECONDE:    Duration of 1 second in milliseconds.
 *  MINUTE:     Duration of 1 minute in milliseconds.
 *  HOUR:       Duration of 1 hour in milliseconds.
 *  DAY:        Duration of 1 day in milliseconds.
 */
setTimeout(function, 3 * Date.DURATION.MINUTE);

/**
 * Checks if a date is between the specified interval, bounds included.
 *  start:      The starting date.
 *  end:        The ending date.
 */
bool = date.isBetween(start, end);

/**
 * Checks if a date is between the specified interval, bounds excluded.
 *  start:      The starting date.
 *  end:        The ending date.
 */
bool = date.isBetweenExclusive(start, end);

/**
 * Returns a new Date that adds the specified number of milliseconds to the value of this instance.
 *  value:      A number of milliseconds. The value parameter can be negative or positive.
 */
date = date.addMilliseconds(value);

/**
 * Returns a new Date that adds the specified number of seconds to the value of this instance.
 *  value:      A number of seconds. The value parameter can be negative or positive.
 */
date = date.addSeconds(value);

/**
 * Returns a new Date that adds the specified number of minutes to the value of this instance.
 *  value:      A number of minutes. The value parameter can be negative or positive.
 */
date = date.addMinutes(value);

/**
 * Returns a new Date that adds the specified number of hours to the value of this instance.
 *  value:      A number of hours. The value parameter can be negative or positive.
 */
date = date.addHours(value);

/**
 * Returns a new Date that adds the specified number of days to the value of this instance.
 *  value:      A number of days. The value parameter can be negative or positive.
 */
date = date.addDays(value);

/**
 * Returns a new Date that adds the specified number of months to the value of this instance.
 *  value:      A number of months. The value parameter can be negative or positive.
 */
date = date.addMonths(value);

/**
 * Returns a new Date that adds the specified number of years to the value of this instance.
 *  value:      A number of years. The value parameter can be negative or positive.
 */
date = date.addYears(value);
```

**RegExp object enhancements**

```javascript
/**
 * Adds predefined input RegExp patterns to new RegExp.PATTERN object.
 *  EMAIL:      Email address format following official specification.
 *  EMAILS:     One or more email addresses, separated by commas.
 *  PHONE:      Phone number in international or local format, with optional extension.
 *  PASSWORD:   Eight characters minimum password with at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.
 *  PASSPORT:   Passport number in international format.
 *  IBAN:       IBAN number from 16 to 39 characters, optionally grouped in blocks of 4.
 *  POSTCODE:   Multi-countries postal code format.
 */
bool = RegExp.PATTERN.EMAIL.test(string);
```

**Navigator object enhancements**

```javascript
/**
 * Checks if user navigator is Google Chrome.
 */
bool = navigator.isChrome;

/**
 * Checks if user navigator is Microsoft Edge.
 */
bool = navigator.isEdge;

/**
 * Checks if user navigator is Mozilla Firefox.
 */
bool = navigator.isFirefox;

/**
 * Checks if user navigator is Opera.
 */
bool = navigator.isOpera;

/**
 * Checks if user navigator is Apple Safari.
 */
bool = navigator.isSafari;
```

**Document object enhancements**

```javascript
/**
 * Returns a browser cookie value (undefined if not existing).
 *  name:       The cookie name (case sensitive).
 */
string = document.getCookie(name);

/**
 * Sets a browser cookie.
 *  name:       The cookie name (case sensitive).
 *  value:      The value to be stored.
 *  expires:    The cookie expiration date (when browser closes by default).
 */
document.setCookie(name, value, expires);

/**
 * Deletes a browser cookie.
 *  name:       The cookie name (case sensitive).
 */
document.removeCookie(name);
```

**File object enhancements**

```javascript
/**
 * Adds size constants to new File.SIZE object to help converting file sizes from bytes.
 *  KILOBYTE:   Size of 1 kilobyte in bytes.
 *  MEGABYTE:   Size of 1 megabyte in bytes.
 *  GIGABYTE:   Size of 1 gigabyte in bytes.
 *  TERABYTE:   Size of 1 terabyte in bytes.
 */
megabytes = document.getElementById('fileInput').files[0].size / File.SIZE.MEGABYTE;
```

<a id="docjsnew"></a>

### JavaScript new objets

**WebUtility new object**

```javascript
/**
 * Returns a string converted into an HTML-encoded string for HTTP transmission.
 */
string = WebUtility.htmlEncode(string);

/**
 * Returns a string that has been HTML-encoded converted into a decoded string.
 */
string = WebUtility.htmlDecode(string);
```

<a id="dochtml"></a>

### HTML elements enhancements

**HTML element enhancements**

* Adds new `case` attribute to all input elements to force text case (`"none"`, `"lower"`, `"upper"`, `"title"` or `"sentence"`).

```javascript
/**
 * Gets or sets the 'case' attribute value to force text input case.
 *  value:      The text case to apply ("none", "lower", "upper", "title" or "sentence").
 */
string = document.getElementById('input').case;
```

**HTML form element enhancements**

* Adds `"user-invalid"` class to invalid form and form elements after user interaction, emulating the poorly-supported `":user-invalid"` pseudo-class.
* Clears content of HTML output elements when resetting form.

**HTML input element enhancements**

* Improves default `"email"` validation pattern (cf. RegExp.PATTERN.EMAIL and RegExp.PATTERN.EMAILS).
* Improves default `"tel"` validation pattern (cf. RegExp.PATTERN.PHONE).
* Adds default `"password"` validation pattern (cf. RegExp.PATTERN.PASSWORD).
* Adds new `"passport"` input type (cf. RegExp.PATTERN.PASSPORT).
* Adds new `"iban"` input type (cf. RegExp.PATTERN.IBAN).
* Adds new `"postcode"` input type (cf. RegExp.PATTERN.POSTCODE).
* Fixes `"submit"` and `"reset"` buttons behavior bug in Firefox ([#654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072)).

```javascript
/**
 * Returns the password strength from HTMLInputElement.PASSWORD_RATING.EMPTY to HTMLInputElement.PASSWORD_RATING.STRONG.
 *  EMPTY:      Empty.
 *  SHORT:      Less than 8 characters.
 *  WEAK:       One or two of the PASSWORD_RATING.GOOD criteria.
 *  MEDIUM:     Three of the PASSWORD_RATING.GOOD criteria.
 *  GOOD:       At least 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character.
 *  STRONG:     All PASSWORD_RATING.GOOD criteria and greater than or equal to 12 characters.
 */
rating = document.getElementById('passwordInput').getPasswordRating();

/**
 * Returns a static node list containing all HTML output elements associated with the input.
 */
list = document.getElementById('input').getOutputs();
```


## Known issues

* HTML elements must be contained in a form in order to receive the new `"user-invalid"` class.
* Setting the `case` attribute of an HTML element will overwrite its `text-transform` CSS property value.
* Changing the `type` attribute of an HTML input element will not update its `case` attribute and validation pattern.
* HTML element with both `case` and `minlength` attributes will remain valid even if white spaces trimming makes its value too short ([More...](https://stackoverflow.com/a/45930115)).


## Acknowledgements

Balzac.js JavaScript library is part of the Balzac project by [Alexandre Gastaud](https://github.com/visicode), along with [Balzac.cs](https://github.com/visicode/Balzac.cs) C# library.
