import { useEffect, useState } from "react"

const useFetch = ({ url }) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(null);
	const [isError, setIsError] = useState(null);

	useEffect(() => {
		console.log(url);
		setIsPending(true);
		setData(null);
		setTimeout(() => {
			fetch(url)
				.then(response => {
					console.log(response);
					if (response.ok || response.status === 200) {
						return response.json();
					} else {
						throw Error(`Server status: ${response.status}`)
					}
				})
				.then(data => {
					console.log(data);
					setData(data);
					setIsPending(false);
					setIsError(null);
				})
				.catch(error => {
					setIsPending(false);
					setIsError(error.message);
				})
		}, 3000);
	}, [url]);
	return { data, isPending, isErrorState: isError };
}

function paraWithoutJSONs(anyName) {
	return { anyName };
}
const paraWithoutJSON = (onePara) => {
	return { onePara };
}

export default useFetch;
export { paraWithoutJSON, paraWithoutJSONs };