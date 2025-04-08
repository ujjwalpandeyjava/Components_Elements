import React from 'react'

// app/about/page.tsx
export default async function About() {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
	return <div>About Page</div>;
}
