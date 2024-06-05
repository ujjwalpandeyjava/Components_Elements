const computeExpensiveValue = (num) => {
	console.log('Computing expensive value...');
	let result = 0;
	for (let i = 0; i < 1000000000; i++) {
		result += num;
	}
	return result;
};
export default computeExpensiveValue;