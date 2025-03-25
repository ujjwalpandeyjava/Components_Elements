
const Dashboard = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

	return (
		<div>Dashboard</div>
	)
}

export default Dashboard