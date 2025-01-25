// apiEndPoints.js
import fetcher, { fetchWithAbort } from './api';

const apiEndPoints = {
	AUTH(url = 'auth') {
		return {
			Login: (payload) => fetcher.post(
				url + '/authenticate',
				{},
				{ headers: { Authorization: payload.Authorization } }
			),
			RegisterNewUser: (body) => fetcher.post(
				url + '/register',
				{ ...body },
				{ headers: { 'Content-Type': 'application/json', accept: 'application/json' } }
			),
		};
	},
	Articles(url = 'cms') {
		return {
			GetHistory: (payload) => {
				const { fetchData, cancel } = fetchWithAbort(url + '/getHistoricalItems', {
					params: payload,
				});
				return { fetchData, cancel };
			},
		};
	},
};

export default apiEndPoints;
