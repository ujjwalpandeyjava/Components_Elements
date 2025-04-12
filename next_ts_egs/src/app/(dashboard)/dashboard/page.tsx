import wait from "wait"
import Link from 'next/link';

const Dashboard = async () => {
	await wait(1000)	// Simulate a delay
	return (
		<div>
			<div>Dashboard</div>
			<Link href={{
				pathname: '/dashboard/parallelRoute',
				query: { name: 'test' },
			}}>To parallelRoute</Link> |
		</div >
	)
}
export default Dashboard