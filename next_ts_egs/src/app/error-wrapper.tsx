"use client";
import { useState } from "react";



const ErrorSimulator = ({ message = "An error occurred", }: { message?: string; }) => {
	const [error, setError] = useState(false);
	if (error) throw new Error(message);

	return (<button title="Simulate an error" onClick={() => setError(true)}>Simulate root layout Error</button>);
};

export const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div><ErrorSimulator message="Simulated error in root layout" /></div>
			{children}
		</div>
	);
};