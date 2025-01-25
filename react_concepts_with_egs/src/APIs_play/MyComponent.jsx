import React, { useEffect, useState } from 'react';
import apiEndPoints from './apiEndPoints';
import axios from 'axios';

const MyComponent = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, []);

	useEffect(() => {
		const { fetchData, cancel } = apiEndPoints.Articles().GetHistory({
			language: 'en',
			pageSize: 50,
			offSet: 0,
			sortOrder: 'DESC',
		});

		fetchData
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				if (axios.isCancel(err)) {
					console.log('Request canceled', err.message);
				} else {
					setError(err);
				}
			});

		if (!isVisible) {
			cancel('Component not visible anymore');
		}

		return () => {
			cancel('Component unmounted');
		};
	}, [isVisible]);

	return (
		<div>
			{error && <div>Error: {error.message}</div>}
			{data ? <div>Data: {JSON.stringify(data)}</div> : <div>Loading...</div>}
		</div>
	);
};

export default MyComponent;
