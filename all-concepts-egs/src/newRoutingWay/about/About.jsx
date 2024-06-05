import { useState } from "react"

function About() {
	const [count, setCount] = useState(1);
	return (
		<div>
			About: {count}
			<button onClick={() => setCount(old => old + 1)}>Inc</button>
			<button onClick={() => setCount(old => old - 1)}>Desc</button>
		</div>
	)
}

export default About