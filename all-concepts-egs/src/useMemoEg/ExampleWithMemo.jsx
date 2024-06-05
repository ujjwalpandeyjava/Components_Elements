import { useState, useMemo } from 'react';
import computeExpensiveValue from './computeExpensiveValue';


const ExampleWithMemo = () => {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(42);

	const expensiveValue = useMemo(() => computeExpensiveValue(number), [number]);

	return (
		<div>
			<h3>With useMemo</h3>
			<p>Expensive Value: {expensiveValue}</p>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<button onClick={() => setNumber(number + 1)}>Change Number {number}</button>
		</div>
	);
};

export default ExampleWithMemo;
