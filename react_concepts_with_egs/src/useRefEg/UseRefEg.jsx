import { useState, useRef, useEffect } from 'react';

const UseRefEg = () => {
	const [timer, setTimer] = useState(0);
	const intervalRef = useRef();

	const startTimer = () => {
		intervalRef.current = setInterval(() => {
			setTimer((prevTimer) => prevTimer + 1);
		}, 1000);
	};

	const stopTimer = () => {
		clearInterval(intervalRef.current);
	};

	useEffect(() => {
		return () => {
			stopTimer();
		};
	}, []);

	return (
		<div>
			<h2>UseRef example: with mutable data.</h2>
			<hr />
			<p>Timer: {timer} seconds</p>
			<button onClick={startTimer}>Start Timer</button>
			<button onClick={stopTimer}>Stop Timer</button>
		</div>
	);
};

export default UseRefEg;
