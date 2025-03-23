/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../UserContext';
import { authTokenKey } from './envVariables';


// Response we get from the API.


// Options we can add in the API
interface ApiOptions {
	method?: string;
	params?: Record<string, string | number>;
	headers?: Record<string, string>;
	body?: any;
}
const defaultApiOptions: ApiOptions = {
	method: "GET",
	params: {},
	headers: {},
	body: null
}
/**
 * Custom hook to handle API calls with generic support for data type.
 * T is the expected type of the response data.
 * 
 * -1 = Never hit
 *  1 = in-progress
 *  0 = Done
 */
const UseApi = <T>() => {
	const [inProgress, setInProgress] = useState<number>(0);
	const [cookies] = useCookies([authTokenKey]);
	const [error, setError] = useState<string | null>(null);
	const [abort, setAbort] = useState<AbortController | null>(null);
	const [data, setData] = useState<T | null>(null);
	const [statusCode, setStatusCode] = useState<number>(0);
	const { t } = useTranslation();

	const { userDetails, updateUserContext, emptyUserContext, updateUserPermittedPages } = useAuthContext(); // Destructure loading state

	const hitApi = useCallback(async (endpoint: string, options: ApiOptions = defaultApiOptions) => {
		// Unblock this try catch If ever getting api calling errors.
		// try {

		// Cancels ongoing request if it exists
		if (abort) abort.abort();

		const newAbortController = new AbortController();
		setAbort(newAbortController);// Store new abort controller in state

		// Create headers with content type and authorization if available
		let headersContent: Record<string, string> = { 'Content-Type': 'application/json', ...options.headers };

		if (cookies[authTokenKey])
			headersContent["Authorization"] = `Bearer ${cookies[authTokenKey]}`;

		if (options.body && !(options.body instanceof FormData))
			headersContent["Content-Type"] = 'application/json';

		headersContent = { ...options.headers, ...headersContent }

		// Construct the URL with parameters
		const url = new URL(endpoint);
		Object.keys(options.params || {})
			.forEach((key: string) => {
				url.searchParams.append(key, String(options.params![key]));
			});

		setInProgress(1);
		setError(null);

		fetch(url.toString(), {
			method: options.method,
			headers: headersContent,
			signal: newAbortController.signal,
			body: options.body ? (options.body instanceof FormData) ? options.body : JSON.stringify(options.body) : null
		})
			.then(response => {

				setStatusCode(response.status)

				switch (response.status) {
					case 200:
						return response.json() as T;
					case 400:
						throw new Error(`404 Not Found: ` + url);
					case 401:
						updateUserContext({
							data: undefined,
							message: {
								displayMessage: "Logged out!"
							}
						})
						break;
					// throw new Error(`Need authentication`);
					default:
						throw new Error(`Status: ${response.statusText}, error: ${t('unexpectedErrorTryLayer')}`);
				}
			})
			.then(data => {	// Success
				setData(data as T);
			})
			.catch(err => {
				setError(err.message || t('unexpectedErrorTryLayer'));
				setData(null);
				setStatusCode(500)
			})
			.finally(() => {
				setInProgress(0);
			})
		// } catch (err) {
		// 	setInProgress(0);
		// 	if (err instanceof Error)
		// 		setError(err.message);
		// 	setData(null);
		// 	setStatusCode(500)
		// }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cookies]);
	// [abort, cookies, t, updateUserContext]

	return { hitApi, inProgress, data, setData, statusCode, error, abort };
};

export default UseApi;