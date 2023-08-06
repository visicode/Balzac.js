/*! js/fetch.js | MIT License | github.com/visicode/Balzac.js */
'use strict';

window.Fetch = window.Fetch || {};

/**
 * Starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a Response object.
 */
Fetch.fetch || Object.defineProperties(Fetch, {
	fetch: {
		value: (resource, options = {}) =>
			fetch(resource, options)
				.catch(console.error),
		enumerable: true
	}
});

/**
 * Starts the process of getting a resource from the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a Response object.
 */
Fetch.get || Object.defineProperties(Fetch, {
	get: {
		value: (resource, options = {}) =>
			Fetch.fetch(resource, {
				method: 'GET',
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of posting a resource to the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {any} data The data to post (generally a FormData, an object or a string).
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a Response object.
 */
Fetch.post || Object.defineProperties(Fetch, {
	post: {
		value: (resource, data, options = {}) =>
			Fetch.fetch(resource, {
				method: 'POST',
				body: data,
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of putting a resource to the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {any} data The data to put (generally a FormData, an object or a string).
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a Response object.
 */
Fetch.put || Object.defineProperties(Fetch, {
	put: {
		value: (resource, data, options = {}) =>
			Fetch.fetch(resource, {
				method: 'PUT',
				body: data,
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of deleting a resource from the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a Response object.
 */
Fetch.delete || Object.defineProperties(Fetch, {
	delete: {
		value: (resource, options = {}) =>
			Fetch.fetch(resource, {
				method: 'DELETE',
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of fetching a JSON resource from the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a JSON object.
 */
Fetch.fetchJson || Object.defineProperties(Fetch, {
	fetchJson: {
		value: (resource, options = {}) =>
			fetch(resource, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				mode: 'cors',
				credentials: 'include',
				...options,
				body: options.body && JSON.stringify(options.body)
			})
				.then(response => response.ok && response.json())
				.catch(console.error),
		enumerable: true
	}
});

/**
 * Starts the process of getting a JSON resource from the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a JSON object.
 */
Fetch.getJson || Object.defineProperties(Fetch, {
	getJson: {
		value: (resource, options = {}) =>
			Fetch.fetchJson(resource, {
				method: 'GET',
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of posting a JSON resource to the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {object} data The data object to post, that will be converted to JSON.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a JSON object.
 */
Fetch.postJson || Object.defineProperties(Fetch, {
	postJson: {
		value: (resource, data, options = {}) =>
			Fetch.fetchJson(resource, {
				method: 'POST',
				body: data,
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of putting a JSON resource to the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {object} data The data object to put, that will be converted to JSON.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a JSON object.
 */
Fetch.putJson || Object.defineProperties(Fetch, {
	putJson: {
		value: (resource, data, options = {}) =>
			Fetch.fetchJson(resource, {
				method: 'PUT',
				body: data,
				...options
			}),
		enumerable: true
	}
});

/**
 * Starts the process of deleting a JSON resource from the network, returning a promise which is fulfilled once the response is available.
 * @param {(RequestInfo|URL)} resource The resource that you wish to fetch.
 * @param {(RequestInit|undefined)} options An object containing any custom settings that you want to apply to the request.
 * @returns {Promise} A Promise that resolves to a JSON object.
 */
Fetch.deleteJson || Object.defineProperties(Fetch, {
	deleteJson: {
		value: (resource, options = {}) =>
			Fetch.fetchJson(resource, {
				method: 'DELETE',
				...options
			}),
		enumerable: true
	}
});
