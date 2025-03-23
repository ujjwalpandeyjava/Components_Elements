import { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAuthContext } from './UserContext.js';
import { authTokenKey } from './envVariables';



// Default API options
const defaultApiOptions = {
	method: "GET",
	params: {},
	headers: {},
	body: null
};
const APIStatus = {
	NEVER_HIT: -1,
	IN_PROGRESS: 1,
	DONE: 0
};

/**
 * Custom hook to handle API calls.
 */
const UseAPI = () => {
	const [inProgress, setInProgress] = useState(APIStatus.NEVER_HIT);
	const [cookies] = useCookies([authTokenKey]);
	const [error, setError] = useState(null);
	const [abort, setAbort] = useState(null);
	const [fetchedData, setFetchedData] = useState(null);
	const [statusCode, setStatusCode] = useState(0);
	const { userDetails, updateUserContext } = useAuthContext(); // Destructure loading state


	const hitApi = useCallback(async (endpoint, options = defaultApiOptions) => {
		// Cancels ongoing request if it exists
		if (abort)
			abort.abort();

		const newAbortController = new AbortController();
		setAbort(newAbortController); // Store new abort controller in state

		// Create headers with content type and authorization if available
		let headers = {};
		if (cookies[authTokenKey])
			headers["Authorization"] = `Bearer ${cookies[authTokenKey]}`;
		if (options.body && options.body instanceof FormData)
			delete headers["Content-Type"];
		else
			headers["Content-Type"] = 'application/json';
		headers = { ...options.headers, ...headers };

		// Construct the URL with parameters
		const url = new URL(endpoint);
		Object.keys(options.params || {}).forEach(key => {
			url.searchParams.append(key, options.params[key]);
		});

		setInProgress(APIStatus.IN_PROGRESS);
		setError(null);

		fetch(url.toString(), {
			method: options.method,
			headers: headers,
			signal: newAbortController.signal,
			body: options.body ? (options.body instanceof FormData ? options.body : JSON.stringify(options.body)) : null
		})
			.then(response => {
				setStatusCode(response.status);

				switch (response.status) {
					case 200:
						return response.json();
					case 400:
						throw new Error(`404 Not Found: ` + url);
					case 401:
						updateUserContext({
							data: undefined,
							message: { displayMessage: "Logged out!" }
						});
						break;
					default:
						throw new Error(`Status: ${response.statusText}, error: Unexpected error occurred. Please try again later.`);
				}
			})
			.then(data => { // Success
				setFetchedData(data);
			})
			.catch(err => {
				setError(err.message || 'Unexpected error occurred. Please try again later.');
				setFetchedData(null);
				setStatusCode(500);
			})
			.finally(() => {
				setInProgress(APIStatus.DONE);
			});
	}, [cookies, abort, updateUserContext]);

	return { hitApi, inProgress, data: fetchedData, setData: setFetchedData, statusCode, error, abort };
};

export default UseAPI;