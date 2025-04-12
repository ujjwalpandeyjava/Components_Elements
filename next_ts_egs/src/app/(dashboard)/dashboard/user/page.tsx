import Link from "next/link"


const User = () => {

	return (
		<>
			Users
			<br />
			<br />
			<ul>
				<li>
					<Link href="./user/1">User 0</Link>
				</li>
				<li>
					<Link href="/dashboard/user/1">User 1</Link>
				</li>
				<li>
					<Link href="/dashboard/user/2">user 2</Link>
				</li>
				<li>
					<Link href="/dashboard/user/3">user 3</Link>
				</li>
				<li>
					<Link href="/dashboard/user/4">user 4</Link>
				</li>
			</ul>
		</>
	)
}

export default User