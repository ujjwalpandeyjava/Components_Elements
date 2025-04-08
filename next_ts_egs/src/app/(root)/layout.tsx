const layoutRoot = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<div>
			<h2>Layout (Root)</h2>
			{children}
		</div>
	)
}

export default layoutRoot
