// Children is same as outlet in the react.js

const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<>
			<h2>Layout (Dashboard)</h2>
			{children}
		</>
	)
}

export default layout
