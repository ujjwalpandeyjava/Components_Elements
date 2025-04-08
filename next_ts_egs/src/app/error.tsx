'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'


// Components picks the nearest parent error file route (we can have a global-error.tsx)
export default function GlobalError({ error }: Readonly<{ error: Error & { digest?: string } }>) {
	useEffect(() => {
		if (error)
			console.error(error)
	}, [error])

	return (
		<h2>Something went wrong! Global error!</h2>
	)
}