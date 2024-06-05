import { useState, useDeferredValue } from 'react';
import HeavyComputation from './HeavyComputation';


const WithDeferredValue = () => {
	const [input, setInput] = useState('');
	const deferredInput = useDeferredValue(input);

	return (
		<div>
			<h1>With useDeferredValue</h1>
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
			<HeavyComputation value={deferredInput} />
		</div>
	);
};

export default WithDeferredValue;
