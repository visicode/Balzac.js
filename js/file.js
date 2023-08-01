/*! js/file.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

/**
 * Adds size constants to new File.SIZE object to help converting file sizes from bytes.
 */
File.SIZE || Object.defineProperties(File, {
	SIZE: {
		value: Object.freeze({
			KILOBYTE: 1024,
			MEGABYTE: 1024 * 1024,
			GIGABYTE: 1024 * 1024 * 1024,
			TERABYTE: 1024 * 1024 * 1024 * 1024
		})
	}
});
