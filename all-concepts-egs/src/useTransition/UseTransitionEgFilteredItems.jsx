import { useEffect, useState, useTransition } from "react";

const UseTransitionEgFilteredItems = () => {
	const [inputValue, setInputValue] = useState("");

	const [filterValue, setFilterValue] = useState("");

	const [list, setList] = useState([]);
	const [filteredList, setFilteredList] = useState([]);

	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		setList(["ac", "be", "cb", "de", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]);
	}, []);

	useEffect(() => {
		if (filterValue)
			setFilteredList(list.filter((item) => item.includes(filterValue)));
		else
			setFilteredList(list);
	}, [filterValue, list]);

	return (
		<>
			<p>Type fast to see loading..</p>
			<hr />
			<br />
			<input value={inputValue}
				onChange={(event) => {
					setInputValue(event.target.value);
					startTransition(() => {
						setFilterValue(event.target.value);
					});
				}}
				placeholder="Type to filter..."
			/>
			{isPending ? (<p>Loading...</p>) : (filteredList.map((item) => <div key={item}>{item}</div>))}
		</>
	);
};
export default UseTransitionEgFilteredItems;
