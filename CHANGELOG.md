# Changes to Balzac.js

### 0.1.3 (September 5, 2023)

* Add Node.js compatibility.
* Use of globalThis for Fetch, WebUtility and File objects declarations.
* Improve WebUtility.htmlEncode and WebUtility.htmlDecode functions.
* Move String.stripSpecialChars, String.nl2br, String.nl2p and String.toPlainText to WebUtility object.
* Move HTMLInputElement.getPasswordStrength function to WebUtility object.
* Move HTMLInputElement.PASSWORD_STRENGTH object to WebUtility object.
* Update README.md and test.html files.
* New package.json, entities.json and test.mjs files.

### 0.1.2 (August 13, 2023)

* Add String.stripSpecialChars function.
* Update README.md.

### 0.1.1 (August 6, 2023)

* Add String.firstLines function.
* Add Date.isValid function.
* document.getCookie function returning null if cookie not existing.
* Add Fetch object with resource fetching functions.
* Add automatic focus on the first input field of the currently visible form.
* Fix HTML input elements forced-case regression.
* Rename HTMLInputElement.getPasswordRating function to getPasswordStrength.
* Rename HTMLInputElement.PASSWORD_RATING object to PASSWORD_STRENGTH.
* Update README.md and test.html files.

### 0.1.0 (August 4, 2023)

* Rename String.trimAll function to trimLines.
* Improve RegExp.PATTERN patterns.

### 0.0.9 (August 2, 2023)

* WebUtility functions set as enumerable.
* Update README.md and test.html files.

### 0.0.8 (August 1, 2023)

* Add File.SIZE object to help converting file sizes from bytes.
* Move String.htmlEncode and String.htmlDecode functions to WebUtility new object.
* Improve String.nl2br and String.nl2p functions.

### 0.0.7 (July 26, 2023)

* String.truncate function not removing HTML tags anymore.
* Improve String.toPlainText function.
* Update README.md and test.html files.

### 0.0.6 (July 25, 2023)

* Faster library initialization.
* Improve String.toTitleCase and String.toSentenceCase functions.
* Add String.trimAll and String.htmlDecode functions.
* String.stripTags function replaced by enhanced String.toPlainText.
* Remove document.DOMContentLoaded function.
* Improve HTML elements case attribute.
* Improve HTML form elements validation.
* Update README.md and test.html files.

### 0.0.5 (July 22, 2023)

* Add String.isUpperCase and String.isLowerCase functions.
* Improve String.toTitleCase and String.toSentenceCase functions.
* Rename String.encodeHtml function to htmlEncode.
* Content of HTML output elements cleared when resetting form.

### 0.0.4 (July 22, 2023)

* Remove Number.toHex function.

### 0.0.3 (July 10, 2023)

* Rename between and betweenExclusive functions to isBetween and isBetweenExclusive.

### 0.0.2 (June 27, 2023)

* Add Date.DURATION object to help converting delays into milliseconds.
* Rename RegExp.INPUT_PATTERN object to PATTERN.
* Fix RegExp.PATTERN.EMAIL, RegExp.PATTERN.EMAILS and RegExp.PATTERN.PHONE expressions.
* Add RegExp.PATTERN.IBAN expression and related "iban" HTML input element.
* Add RegExp.PATTERN.POSTCODE expression and related "postcode" HTML input element.
* Remove white spaces from both ends of text input values when case="upper" or case="lower".
* Rename HTMLInputElement.PASSWORD_RATING.FAIR constant to MEDIUM.
* Update README.md and test.html files.

### 0.0.1 (June 25, 2023)

* Initial release.
