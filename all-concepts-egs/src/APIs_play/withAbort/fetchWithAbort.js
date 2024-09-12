import axios from 'axios';

const fetcher = axios.create({
	baseURL: 'https://api.example.com',
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
	},
});

const fetchWithAbort = (url, options = {}) => {
	const source = axios.CancelToken.source();

	const fetchData = fetcher.get(url, {
		...options,
		cancelToken: source.token,
	});

	return { fetchData, cancel: source.cancel };
};

export default fetcher;
export { fetchWithAbort };
