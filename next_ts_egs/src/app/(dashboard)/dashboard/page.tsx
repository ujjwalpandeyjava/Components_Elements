import wait from "wait"
import Link from 'next/link';

const Dashboard = async () => {
	await wait(1000)	// Simulate a delay
	return (
		<div>
			<div>Dashboard</div>
			<p><Link href={{ pathname: '/dashboard/parallelRoute', query: { name: 'test' } }}>To parallelRoute</Link></p>
			<p><Link href={"/dashboard/user"}>User</Link></p>
			<p><Link href={"/dashboard/contextRoute"}>Context-Route</Link></p>
		</div >
	)
}
export default Dashboard