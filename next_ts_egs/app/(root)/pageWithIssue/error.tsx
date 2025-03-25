'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'


// Components picks the nearest parent error file route (we can have a global-error.tsx)
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
	useEffect(() => {
		if (error)
			console.error(error)
	}, [error])

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button onClick={reset}>Try again</button>
		</div>
	)
}