

const pageWithIssue = async () => {
	setTimeout(() => {
		throw new Error("Component with error!")
	}, 3000);

	return (
		<div>
			pageWithIssue
			<br />
			{/* <button onClick={() => { giveError = true }}>throw error</button> */}
		</div>
	)
}

export default pageWithIssue
