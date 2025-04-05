const layoutRoot = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<div>
			<h2>Layout (Data Fetching)</h2>
			{children}
		</div>
	)
}

export default layoutRoot
