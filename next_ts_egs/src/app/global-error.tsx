"use client"; // Error boundaries must be Client Components

// global error only works in the production mode...
export default function GlobalError() {
	return (
		<html lang="en">
			<body>
				<div>
					<h2>Something went wrong globally in root layout!</h2>
					<button onClick={() => { window.location.reload(); }} >Refresh</button>
				</div>
			</body>
		</html>
	);
}