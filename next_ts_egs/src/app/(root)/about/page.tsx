import React from 'react'
import wait from 'wait';
import Card from '../../../components/Card';

// app/about/page.tsx
export default async function About() {
	// await new Promise((resolve) => setTimeout(resolve,1000)); // Simulate a delay
	await wait(1000)	// Simulate a delay

	return (
		<Card>
			About Page
		</Card>
	)
}
