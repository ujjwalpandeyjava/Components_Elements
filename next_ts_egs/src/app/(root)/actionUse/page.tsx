import Link from 'next/link';


const Page = () => {
	console.log("page: Action use");


	return (
		<div>
			<h2>Server Action Use</h2>
			<p><Link href="/actionUse/serverComponent">To action on Server Component</Link></p>
			<p><Link href="/actionUse/serverCompCallingClientComp">To action on Server Component calling Client Component</Link></p>
			<p><Link href="/actionUse/clientComponent">To action on Client Component</Link></p>
			<p><Link href="/actionUse/clientComponentWithActionState">To action on Client Component with Action State</Link></p>
		</div>
	)
}
export default Page