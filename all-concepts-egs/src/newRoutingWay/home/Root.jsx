import { Link } from "react-router-dom"

function Root() {
	return (
		<div>
			<h1>Routing Navigation</h1>
			{/* <Link to="./">Home</Link> | <Link to="./about">About Us</Link> | <Link to="contact">Contact</Link> | <Link to="dashboard">Dashboard</Link> */}
			<Link to="about">About Us</Link>
		</div>
	)
}

export default Root