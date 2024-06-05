import { memo } from "react";


const heavyComputation = memo(({ value }) => {
	console.log('Computing...' + value);
	let result = 0;
	for (let i = 0; i < 1000000000; i++) {
		result += i;
	}
	return (
		<div>
			{`${value} processed ${result}`}
		</div>
	);
});
export default heavyComputation;