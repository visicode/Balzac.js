# Balzac.js

> A JavaScript library that enhances your favorite language


## Tests

#### Web browser

https://raw.githack.com/visicode/Balzac.js/master/test.html

#### Node.js

[![Open in GitHub Codespaces (web-based version of Visual Studio Code)](https://github.com/codespaces/badge.svg)](https://codespaces.new/visicode/Balzac.js)


## What does it do?

* Adds missing functionalities to JavaScript engines.
* Brings expected behavior to some incomplete features.
* Enhance existing HTML elements.
* Gently extends JavaScript built-in objects.


## What is it not?

* A polyfill library (use [Polyfill.io](https://polyfill.io/) for that).
* A JavaScript framework.


## Installation and usage

#### Web projects

1. Download the minified version:\
https://raw.githubusercontent.com/visicode/Balzac.js/master/balzac.min.js

2. Include it between the `<head>` tags of your HTML document with the `defer` attribute:

```html
<script defer type="text/javascript" src="balzac.min.js"></script>
```

#### Node.js projects

1. Install the package:

```bash
npm install --save https://github.com/visicode/Balzac.js.git
```

2. Import the required modules into your JavaScript files:

```javascript
/**** JavaScript objets enhancements */
import './js/number.js';       // Number object enhancements
import './js/math.js';         // Math object enhancements
import './js/string.js';       // String object enhancements
import './js/date.js';         // Date object enhancements
import './js/regexp.js';       // RegExp object enhancements
import './js/file.js';         // File object enhancements

/**** JavaScript new objets */
import './js/webutility.js';   // WebUtility new object
import './js/fetch.js';        // Fetch new object
```


## Documentation

Yes, we do extend some JavaScript built-in objects!\
And we'd love our enhancements to be added in JavaScript language, so we'd remove them from the library.

* [JavaScript objets enhancements](#docjs)
* [JavaScript new objets](#docjsnew)
* [HTML elements enhancements](#dochtml)

<a id="docjs"></a>

### JavaScript objets enhancements

**Number object enhancements**

```javascript
/**
 * Checks if a number is between two values, bounds included.
 *  min:         The minimum value.
 *  max:         The maximum value.
 */
bool = number.isBetween(min, max);

/**
 * Checks if a number is between two values, bounds excluded.
 *  min:         The minimum value.
 *  max:         The maximum value.
 */
bool = number.isBetweenExclusive(min, max);
```

**Math object enhancements**

```javascript
/**
 * Returns a numeric expression rounded to a specified number of fractional digits.
 *  x:           The value to be rounded.
 *  decimals:    The number of fractional digits.
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
 * Converts a string to title case (every major word capitalized).
 */
string = string.toTitleCase();

/**
 * Converts a string to sentence case (first word of every sentence capitalized).
 */
string = string.toSentenceCase();

/**
 * Removes leading and trailing white-space characters from each line of a string.
 */
string = string.trimLines();

/**
 * Truncates a string to the nearest word, with a trailing ellipsis if needed.
 *  max:         The maximum number of characters to return.
 */
string = string.truncate(max);

/**
 * Returns only the first lines of a string.
 *  lines:       The number of lines to return.
 */
string = string.firstLines(lines);
```

**Date object enhancements**

```javascript
/**
 * Adds duration constants to new Date.DURATION object for converting delays into milliseconds.
 *  SECONDE:     Duration of 1 second in milliseconds.
 *  MINUTE:      Duration of 1 minute in milliseconds.
 *  HOUR:        Duration of 1 hour in milliseconds.
 *  DAY:         Duration of 1 day in milliseconds.
 */
setTimeout(function, 3 * Date.DURATION.MINUTE);

/**
 * Checks if a date is valid.
 */
bool = date.isValid();

/**
 * Checks if a date is between the specified interval, bounds included.
 *  start:       The starting date.
 *  end:         The ending date.
 */
bool = date.isBetween(start, end);

/**
 * Checks if a date is between the specified interval, bounds excluded.
 *  start:       The starting date.
 *  end:         The ending date.
 */
bool = date.isBetweenExclusive(start, end);

/**
 * Returns a new date that adds the specified number of milliseconds to the value of this instance.
 *  value:       A number of milliseconds. The value parameter can be negative or positive.
 */
date = date.addMilliseconds(value);

/**
 * Returns a new date that adds the specified number of seconds to the value of this instance.
 *  value:       A number of seconds. The value parameter can be negative or positive.
 */
date = date.addSeconds(value);

/**
 * Returns a new date that adds the specified number of minutes to the value of this instance.
 *  value:       A number of minutes. The value parameter can be negative or positive.
 */
date = date.addMinutes(value);

/**
 * Returns a new date that adds the specified number of hours to the value of this instance.
 *  value:       A number of hours. The value parameter can be negative or positive.
 */
date = date.addHours(value);

/**
 * Returns a new date that adds the specified number of days to the value of this instance.
 *  value:       A number of days. The value parameter can be negative or positive.
 */
date = date.addDays(value);

/**
 * Returns a new date that adds the specified number of months to the value of this instance.
 *  value:       A number of months. The value parameter can be negative or positive.
 */
date = date.addMonths(value);

/**
 * Returns a new date that adds the specified number of years to the value of this instance.
 *  value:       A number of years. The value parameter can be negative or positive.
 */
date = date.addYears(value);
```

**RegExp object enhancements**

```javascript
/**
 * Adds predefined input RegExp patterns to new RegExp.PATTERN object.
 *  EMAIL:       Email address format following official specification.
 *  EMAILS:      One or more email addresses, separated by commas.
 *  PHONE:       Phone number in international or local format, with optional extension.
 *  PASSWORD:    Eight characters minimum password with at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.
 *  PASSPORT:    Passport number in international format.
 *  IBAN:        IBAN number from 16 to 39 characters, optionally grouped in blocks of 4.
 *  POSTCODE:    Multi-countries postal code format.
 */
bool = RegExp.PATTERN.EMAIL.test(string);
```

**Navigator object enhancements**

:warning: Not available for Node.js.

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

:warning: Not available for Node.js.

```javascript
/**
 * Gets a browser cookie value (null if not existing).
 *  name:        The cookie name (case sensitive).
 */
string = document.getCookie(name);

/**
 * Sets a browser cookie.
 *  name:        The cookie name (case sensitive).
 *  value:       The value to be stored.
 *  expires:     The cookie expiration date (when browser closes by default).
 */
document.setCookie(name, value, expires);

/**
 * Deletes a browser cookie.
 *  name:        The cookie name (case sensitive).
 */
document.removeCookie(name);
```

**File object enhancements**

```javascript
/**
 * Adds size constants to new File.SIZE object to help converting file sizes from bytes.
 *  KILOBYTE:    Size of 1 kilobyte in bytes.
 *  MEGABYTE:    Size of 1 megabyte in bytes.
 *  GIGABYTE:    Size of 1 gigabyte in bytes.
 *  TERABYTE:    Size of 1 terabyte in bytes.
 */
megabytes = document.getElementById('fileInput').files[0].size / File.SIZE.MEGABYTE;
```

<a id="docjsnew"></a>

### JavaScript new objets

**WebUtility new object**

```javascript
/**
 * Converts a string into an HTML-encoded string for HTTP transmission.
 *  string:      The string to encode.
 */
string = WebUtility.htmlEncode(string);

/**
 * Converts a string that has been HTML-encoded into a decoded string.
 *  string:      The string to decode.
 */
string = WebUtility.htmlDecode(string);

/**
 * Replaces all special characters of a string (other than letters, numbers and separators) with the specified replacement string.
 *  string:      The string containing the special characters to be replaced.
 *  replacement: The replacement string (empty string by default).
 */
string = WebUtility.stripSpecialChars(string, replacement);

/**
 * Converts a string with all new lines replaced with HTML line breaks.
 *  string:      The string containing the new lines to be replaced.
 */
string = WebUtility.nl2br(string);

/**
 * Converts a string with all new lines replaced with HTML paragraphs.
 *  string:      The string containing the new lines to be replaced.
 */
string = WebUtility.nl2p(string);

/**
 * Converts an HTML string to plain text, with all HTML tags and entities removed.
 *  string:      The HTML string to convert to plain text.
 */
string = WebUtility.toPlainText(string);

/**
 * Returns a password strength from PASSWORD_STRENGTH.EMPTY to PASSWORD_STRENGTH.STRONG.
 *  password:    The string containing the password to rate.
 * 
 *  EMPTY:       Empty.
 *  SHORT:       Less than 8 characters.
 *  WEAK:        One or two of the PASSWORD_STRENGTH.GOOD criteria.
 *  MEDIUM:      Three of the PASSWORD_STRENGTH.GOOD criteria.
 *  GOOD:        At least 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character.
 *  STRONG:      All PASSWORD_STRENGTH.GOOD criteria and greater than or equal to 12 characters.
 */
WebUtility.getPasswordStrength(password) >= WebUtility.PASSWORD_STRENGTH.GOOD;
```

**Fetch new object**

```javascript
/**
 * Starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.fetch(url).then(response => response.ok && console.log(response));

/**
 * Starts the process of getting a resource from the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.get(url).then(response => response.ok && console.log(response));

/**
 * Starts the process of posting a resource to the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  data:        The data to post (generally a FormData, an object or a string).
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.post(url, document.forms[0]).then(response => response.ok && console.log(response));

/**
 * Starts the process of putting a resource to the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  data:        The data to put (generally a FormData, an object or a string).
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.put(url, document.forms[0]).then(response => response.ok && console.log(response));

/**
 * Starts the process of deleting a resource from the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.delete(url).then(response => response.ok && console.log(response));

/**
 * Starts the process of fetching a JSON resource from the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.fetchJson(url).then(json => console.log(json));

/**
 * Starts the process of getting a JSON resource from the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.getJson(url).then(json => console.log(json));

/**
 * Starts the process of posting a JSON resource to the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  data:        The data object to post, that will be converted to JSON.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.postJson(url, { ...object }).then(json => console.log(json));

/**
 * Starts the process of putting a JSON resource to the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  data:        The data object to put, that will be converted to JSON.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.putJson(url, { ...object }).then(json => console.log(json));

/**
 * Starts the process of deleting a JSON resource from the network, returning a promise which is fulfilled once the response is available.
 *  resource:    The resource that you wish to fetch.
 *  options:     An object containing any custom settings that you want to apply to the request.
 */
Fetch.deleteJson(url).then(json => console.log(json));
```

<a id="dochtml"></a>

### HTML elements enhancements

**HTML element enhancements**

:warning: Not available for Node.js.

* Adds new `case` attribute to all input elements to force text case (`"none"`, `"lower"`, `"upper"`, `"title"` or `"sentence"`).

```javascript
/**
 * Gets or sets the 'case' attribute value to force text input case.
 *  value:       The text case to apply ("none", "lower", "upper", "title" or "sentence").
 */
string = document.getElementById('input').case;
```

**HTML form element enhancements**

:warning: Not available for Node.js.

* Automatic focus on the first input field of the currently visible form.
* Adds `"user-invalid"` class to invalid form and form elements after user interaction, emulating the poorly-supported `":user-invalid"` pseudo-class.
* Clears content of HTML output elements when resetting form.

**HTML input element enhancements**

:warning: Not available for Node.js.

* Improves default `"email"` validation pattern (cf. RegExp.PATTERN.EMAIL and RegExp.PATTERN.EMAILS).
* Improves default `"tel"` validation pattern (cf. RegExp.PATTERN.PHONE).
* Adds default `"password"` validation pattern (cf. RegExp.PATTERN.PASSWORD).
* Adds new `"passport"` input type (cf. RegExp.PATTERN.PASSPORT).
* Adds new `"iban"` input type (cf. RegExp.PATTERN.IBAN).
* Adds new `"postcode"` input type (cf. RegExp.PATTERN.POSTCODE).
* Fixes `"submit"` and `"reset"` buttons behavior bug in Firefox ([#654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072)).

```javascript
/**
 * Returns a static node list containing all HTML output elements associated with the input.
 */
list = document.getElementById('input').getOutputs();
```


## Support

* ES9+
* Chrome 71+
* Edge 79+
* Firefox 65+
* Opera 58+
* Safari 12.2+
* Node.js 18+


## Known issues

* HTML elements must be contained in a form in order to receive the new `"user-invalid"` class.
* Setting the `case` attribute of an HTML element will overwrite its `text-transform` CSS property value.
* Changing the `type` attribute of an HTML input element will not update its `case` attribute and validation pattern.
* HTML element with both `case` and `minlength` attributes will remain valid even if white spaces auto-trimming will make its value too short ([read more…](https://stackoverflow.com/a/45930115)).


## Acknowledgements

Balzac.js JavaScript library is part of the Balzac project by [Alexandre Gastaud](https://github.com/visicode), along with [Balzac.cs](https://github.com/visicode/Balzac.cs) C# library.
