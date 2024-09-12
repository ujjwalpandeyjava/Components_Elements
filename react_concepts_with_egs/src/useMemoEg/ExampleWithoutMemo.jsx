import { useState } from 'react';
import computeExpensiveValue from './computeExpensiveValue';

const ExampleWithoutMemo = () => {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(42);

	// Wrap this in useMemo to avoid unnecessary computation when using state variables, to enhance performance.
	const expensiveValue = computeExpensiveValue(number);

	return (
		<div>
			<h3>Without useMemo</h3>
			<p>Expensive Value: {expensiveValue}</p>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<button onClick={() => setNumber(number + 1)}>Change Number {number}</button>
		</div>
	);
};

export default ExampleWithoutMemo;
