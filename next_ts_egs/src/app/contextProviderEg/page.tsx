import Link from 'next/link';
const page = () => {
	return (
		<div>
			<p><Link href={"/contextProviderEg/themeRoute"}>Context-Route-ThemeProvider</Link></p>
			<p><Link href={"/contextProviderEg/profile"}>Context-Route-profile</Link></p>
		</div>
	)
}

export default page
