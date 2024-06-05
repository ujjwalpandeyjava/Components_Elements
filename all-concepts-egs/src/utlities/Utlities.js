// Debouncing example (using a timer)
const timeout = "";
function debouncedFunction(arg) {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		console.log('Debounced function:', arg);
	}, 500); // Adjust delay as needed (milliseconds)
}

// Throttling example (using a flag)
var canCallFunction = true;
function throttledFunction(arg) {
	if (canCallFunction) {
		console.log('Throttled function:', arg);
		canCallFunction = false;
		setTimeout(() => {
			canCallFunction = true;
		}, 1000); // Adjust interval as needed (milliseconds)
	}
}