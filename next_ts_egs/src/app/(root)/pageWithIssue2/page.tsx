const pageWithIssue = async () => {

	// let giveError: boolean = false;
	// if (giveError)
	setTimeout(() => {
		throw new Error("Component 2 with error!")
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