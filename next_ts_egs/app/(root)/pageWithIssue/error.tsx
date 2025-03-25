'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'


// Components picks the nearest parent error file route (we can have a global-error.tsx)
export default function GlobalError(
	{ error }: Readonly<{ error: Error & { digest?: string } }>
) {
	useEffect(() => {
		if (error)
			console.error(error)
	}, [error])

	return (
		<h2>Something went wrong!</h2>
	)
}

// Component Hierarchy
// <Layout>
// 	<ErrorBoundary fallback={<Error />}>
// 		<Layout>
// 			<ErrorBoundary fallback={<Error />}>
// 				<Page />
// 			</ErrorBoundary>
// 		</Layout>
// 	</ErrorBoundary>
// </Layout>