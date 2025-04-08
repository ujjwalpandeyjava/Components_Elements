// 'use client'

// App Router, Next.js automatically provides params so use it
const EachUser = async (
	{ params, searchParams }: {
		params: Promise<{ id: string }>,
		searchParams: Promise<{ sort?: "asc" | "desc" }>
	}
) => {
	const { id } = await params; // Await the params to resolve the Promise
	const { sort } = await searchParams;

	return (
		<div>
			EachUser generic page ({id})
			<br />
			{sort}
		</div>
	)
}

export default EachUser
