// 'use client'

// App Router, Next.js automatically provides params so use it
const EachUser = async ({ params }: { params: { id: string } }) => {
	const { id } = await params; // Await the params to resolve the Promise


	return (
		<div>
			EachUser generic page ({id})
		</div>
	)
}

export default EachUser
